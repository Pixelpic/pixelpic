import { set } from 'lodash';

/**
 * pixelit - convert an image to Pixel Art, with/out grayscale and based on a color palette.
 * @author José Moreira @ <https://github.com/giventofly/pixelit>
 **/
export type PixelItColor = [number, number, number];
export type PixelItPalette = PixelItColor[];
export type PixelItColors = PixelItColor[][];

interface PixelItParams {
  to: HTMLCanvasElement;
  from: HTMLImageElement;
  width: number;
  height: number;
  scale?: number;
  palette: PixelItPalette;
  maxHeight?: number;
  maxWidth?: number;
  brick: number;
}

export class PixelIt {
  private to: HTMLCanvasElement;
  private from: HTMLImageElement;
  private width: number;
  private height: number;
  private scale: number;
  private palette: PixelItPalette;
  private maxHeight?: number;
  private maxWidth?: number;
  private ctx: CanvasRenderingContext2D;
  private brick: number;

  constructor(config: PixelItParams) {
    this.to = config.to;
    this.from = config.from;
    //range between 0 to 100
    this.scale =
      config.scale && config.scale > 0 && config.scale <= 50 ? config.scale * 0.01 : 8 * 0.01;
    this.palette = config.palette;
    this.maxHeight = config.maxHeight;
    this.maxWidth = config.maxWidth;
    this.width = config.width;
    this.height = config.height;
    this.brick = config.brick;
    this.ctx = this.to.getContext('2d') as CanvasRenderingContext2D;
  }

  /**
   *
   * @param {array} arr Array of rgb colors: [[int,int,int]]
   */
  setPalette(arr: PixelItPalette) {
    this.palette = arr;
    return this;
  }

  /**
   * color similarity between colors, lower is better
   * @param {array} rgbColor array of ints to make a rgb color: [int,int,int]
   * @param {array} compareColor array of ints to make a rgb color: [int,int,int]
   * @returns {number} limits [0-441.6729559300637]
   */

  private colorSim(rgbColor: PixelItColor, compareColor: PixelItColor) {
    const distance = rgbColor.reduce((res, _, index) => {
      return res + Math.pow(rgbColor[index] - compareColor[index], 2);
    }, 0);
    return Math.sqrt(distance);
  }

  /**
   * given actualColor, check from the paletteColors the most aproximated color
   * @param {array} actualColor rgb color to compare [int,int,int]
   * @returns {array} aproximated rgb color
   */
  private similarColor(actualColor: PixelItColor) {
    let selectedColor: any[] = [];
    let currentSim = this.colorSim(actualColor, this.palette[0]);
    this.palette.forEach((color) => {
      const nextColor = this.colorSim(actualColor, color);
      if (nextColor <= currentSim) {
        selectedColor = color;
        currentSim = nextColor;
      }
    });
    return selectedColor;
  }

  private createCanvas({
    width = this.width,
    height = this.height,
  }: { width?: number; height?: number } = {}): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    return canvas;
  }

  private getScaledDimension(v: number): number {
    return v / this.brick;
  }

  /**
   * pixelate based on @author rogeriopvl <https://github.com/rogeriopvl/8bit>
   * Draws a pixelated version of an image in a given canvas
   */
  pixelate() {
    const width = this.getScaledDimension(this.width);
    const height = this.getScaledDimension(this.height);

    //make temporary canvas to make new scaled copy
    const canvas = this.createCanvas({ width, height });

    //corner case of bigger images, increase the temporary canvas size to fit everything
    // if (this.to.width > 900 || this.to.height > 900) {
    //   //fix sclae to pixelate bigger images
    //   this.scale *= 0.5;
    //   scaledW = this.to.width * this.scale;
    //   scaledH = this.to.height * this.scale;
    //   //make it big enough to fit
    //   canvas.width = Math.max(scaledW, scaledH) + 50;
    //   canvas.height = Math.max(scaledW, scaledH) + 50;
    // }
    // get the context
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    // draw the image into the canvas
    context.drawImage(this.from, 0, 0, width, height);
    document.body.appendChild(canvas);
    //configs to pixelate

    this.ctx.imageSmoothingEnabled = false;

    //calculations to remove extra border
    // let finalWidth = this.from.naturalWidth;
    // if (this.from.naturalWidth > 300) {
    //   finalWidth +=
    //     this.from.naturalWidth > this.from.naturalHeight
    //       ? parseInt(this.from.naturalWidth / (this.from.naturalWidth * this.scale)) / 1.5
    //       : parseInt(this.from.naturalWidth / (this.from.naturalWidth * this.scale));
    // }
    // let finalHeight = this.from.naturalHeight;
    // if (this.from.naturalHeight > 300) {
    //   finalHeight +=
    //     this.from.naturalHeight > this.from.naturalWidth
    //       ? parseInt(this.from.naturalHeight / (this.from.naturalHeight * this.scale)) / 1.5
    //       : parseInt(this.from.naturalHeight / (this.from.naturalHeight * this.scale));
    // }
    //draw to final canvas
    //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
    this.ctx.drawImage(
      canvas,
      0,
      0,
      width,
      height,
      0,
      0,
      this.width, //+ Math.max(24, 25 * this.scale),
      this.height //+ Math.max(24, 25 * this.scale)
    );
    //remove temp element
    canvas.remove();
    this.convertPalette();

    return this;
  }

  /**
   * converts image to palette using the defined palette or default palette
   */
  private convertPalette() {
    var imgPixels = this.ctx.getImageData(0, 0, this.to.width, this.to.height);
    console.log(imgPixels);
    for (let y = 0; y < imgPixels.height; y++) {
      for (let x = 0; x < imgPixels.width; x++) {
        var i = y * 4 * imgPixels.width + x * 4;
        //var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
        const finalColor = this.similarColor([
          imgPixels.data[i],
          imgPixels.data[i + 1],
          imgPixels.data[i + 2],
        ]);
        imgPixels.data[i] = finalColor[0];
        imgPixels.data[i + 1] = finalColor[1];
        imgPixels.data[i + 2] = finalColor[2];
      }
    }
    this.ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return this;
  }

  public getColors(): PixelItColors {
    const res: PixelItColors = [];
    const w = this.to.width;
    const h = this.to.height;
    var imgPixels = this.ctx.getImageData(0, 0, w, h);
    for (var y = 0; y < imgPixels.height; y = y + this.brick) {
      for (var x = 0; x < imgPixels.width; x = x + this.brick) {
        var i = y * 4 * imgPixels.width + x * 4;
        set(res, `${x / this.brick}.${y / this.brick}`, [
          imgPixels.data[i],
          imgPixels.data[i + 1],
          imgPixels.data[i + 2],
        ]);
      }
    }
    return res;
  }

  /**
   * Resizes image proportionally according to a max width or max height
   * height takes precedence if definied
   */
  // private resizeImage() {
  //   //var ctx = canvas.getContext("2d")
  //   const canvasCopy = document.createElement('canvas');
  //   const copyContext = canvasCopy.getContext('2d') as CanvasRenderingContext2D;
  //   let ratio = 1.0;

  //   //if none defined skip
  //   if (!this.maxWidth && !this.maxHeight) {
  //     return 0;
  //   }

  //   if (this.maxWidth && this.to.width > this.maxWidth) {
  //     ratio = this.maxWidth / this.to.width;
  //   }
  //   //max height overrides max width
  //   if (this.maxHeight && this.to.height > this.maxHeight) {
  //     ratio = this.maxHeight / this.to.height;
  //   }

  //   canvasCopy.width = this.to.width;
  //   canvasCopy.height = this.to.height;
  //   copyContext.drawImage(this.to, 0, 0);

  //   this.to.width = this.to.width * ratio;
  //   this.to.height = this.to.height * ratio;
  //   this.ctx.drawImage(
  //     canvasCopy,
  //     0,
  //     0,
  //     canvasCopy.width,
  //     canvasCopy.height,
  //     0,
  //     0,
  //     this.to.width,
  //     this.to.height
  //   );

  //   return this;
  // }

  /**
   * draw to canvas from image source and resize
   *
   */
  draw() {
    //draw image to canvas
    // this.to.width = this.from.width;
    // this.to.height = this.from.height;
    //draw
    this.ctx.drawImage(this.from, 0, 0);
    //resize is always done
    // this.resizeImage();
    return this;
  }

  public toFile() {
    return new Promise<File>((resolve, reject) => {
      this.to.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], `${Date.now()}.jpg`, { type: 'image/jpeg' });
          resolve(file);
        } else {
          reject();
        }
      });
    });
  }

  /**
   * Save image from canvas
   */

  // saveImage() {
  //   const link = document.createElement('a');
  //   link.download = 'pxArt.png';
  //   link.href = this.to.toDataURL('image/png').replace('image/png', 'image/octet-stream');
  //   document.querySelector('body').appendChild(link);
  //   link.click();
  //   document.querySelector('body').removeChild(link);
  // }

  //end class
}
