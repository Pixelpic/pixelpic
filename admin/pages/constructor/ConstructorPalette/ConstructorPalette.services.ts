type PixelItRGB = [number, number, number];
export type PixelItPalette = PixelItRGB[];

interface PixelItConfig {
  to: HTMLCanvasElement;
  from: HTMLImageElement;
  palette: PixelItPalette;
  scale: number;
  maxHeight: number;
  maxWidth: number;
}

export class PixelIt {
  private drawTo: HTMLCanvasElement;
  private drawFrom: HTMLImageElement;
  private palette: PixelItPalette;
  private scale: number;
  private maxHeight: number;
  private maxWidth: number;
  private ctx: CanvasRenderingContext2D;
  private endColorStats = {};

  constructor({ to, palette, scale, from, maxHeight, maxWidth }: PixelItConfig) {
    this.drawTo = to;
    this.drawFrom = from;
    this.scale = scale && scale > 0 && scale <= 50 ? scale * 0.01 : 8 * 0.01;
    this.palette = palette;
    this.maxHeight = maxHeight;
    this.maxWidth = maxWidth;
    this.ctx = this.drawTo.getContext('2d') as CanvasRenderingContext2D;
    this.hideFromImg();
  }

  private hideFromImg() {
    this.drawFrom.style.visibility = 'hidden';
    this.drawFrom.style.position = 'fixed';
    this.drawFrom.style.top = '0';
    this.drawFrom.style.left = '0';
    return this;
  }

  public setFromImgSource(src: string) {
    this.drawFrom.src = src;
    return this;
  }

  public setDrawFrom(elem: HTMLImageElement) {
    this.drawFrom = elem;
    return this;
  }

  public setDrawTo(elem: HTMLCanvasElement) {
    this.drawTo = elem;
    return this;
  }

  public setPalette(arr: PixelItPalette) {
    this.palette = arr;
    return this;
  }

  public setMaxWidth(width: number) {
    this.maxWidth = width;
    return this;
  }

  public setMaxHeight(height: number) {
    this.maxHeight = height;
    return this;
  }

  public setScale(scale: number) {
    this.scale = scale > 0 && scale <= 50 ? scale * 0.01 : 8 * 0.01;
    return this;
  }

  public getPalette() {
    return this.palette;
  }

  /**
   * color similarity between colors, lower is better
   * @param {array} rgbColor array of ints to make a rgb color: [int,int,int]
   * @param {array} compareColor array of ints to make a rgb color: [int,int,int]
   * @returns {number} limits [0-441.6729559300637]
   */

  private colorSim(rgbColor: PixelItRGB, compareColor: PixelItRGB) {
    let i;
    let max;
    let d = 0;
    for (i = 0, max = rgbColor.length; i < max; i++) {
      d += (rgbColor[i] - compareColor[i]) * (rgbColor[i] - compareColor[i]);
    }
    return Math.sqrt(d);
  }

  /**
   * given actualColor, check from the paletteColors the most aproximated color
   * @param {array} actualColor rgb color to compare [int,int,int]
   * @returns {array} aproximated rgb color
   */
  private similarColor(actualColor: PixelItRGB): PixelItRGB {
    let selectedColor: PixelItRGB = [0, 0, 0];
    let currentSim = this.colorSim(actualColor, this.palette[0]);
    let nextColor;
    this.palette.forEach((color) => {
      nextColor = this.colorSim(actualColor, color);
      if (nextColor <= currentSim) {
        selectedColor = color;
        currentSim = nextColor;
      }
    });
    return selectedColor;
  }

  /**
   * pixelate based on @author rogeriopvl <https://github.com/rogeriopvl/8bit>
   * Draws a pixelated version of an image in a given canvas
   */
  public pixelate() {
    this.drawTo.width = this.drawFrom.naturalWidth;
    this.drawTo.height = this.drawFrom.naturalHeight;
    let scaledW = this.drawTo.width * this.scale;
    let scaledH = this.drawTo.height * this.scale;

    //make temporary canvas to make new scaled copy
    const tempCanvas = document.createElement('canvas');

    // Set temp canvas width/height & hide (fixes higher scaled cutting off image bottom)
    tempCanvas.width = this.drawTo.width;
    tempCanvas.height = this.drawTo.height;
    tempCanvas.style.visibility = 'hidden';
    tempCanvas.style.position = 'fixed';
    tempCanvas.style.top = '0';
    tempCanvas.style.left = '0';

    console.log(tempCanvas);

    //corner case of bigger images, increase the temporary canvas size to fit everything
    if (this.drawTo.width > 900 || this.drawTo.height > 900) {
      //fix scale to pixelate bigger images
      this.scale *= 0.5;
      scaledW = this.drawTo.width * this.scale;
      scaledH = this.drawTo.height * this.scale;
      //make it big enough to fit
      tempCanvas.width = Math.max(scaledW, scaledH) + 50;
      tempCanvas.height = Math.max(scaledW, scaledH) + 50;
    }
    // get the context
    const tempContext = tempCanvas.getContext('2d');

    if (tempContext) {
      tempContext.drawImage(this.drawFrom, 0, 0, scaledW, scaledH);
      document.body.appendChild(tempCanvas);
      //configs to pixelate
      this.ctx.imageSmoothingEnabled = false;

      //calculations to remove extra border
      let finalWidth = this.drawFrom.naturalWidth;
      if (this.drawFrom.naturalWidth > 300) {
        finalWidth +=
          this.drawFrom.naturalWidth > this.drawFrom.naturalHeight
            ? parseInt(
                (this.drawFrom.naturalWidth / (this.drawFrom.naturalWidth * this.scale)).toString()
              ) / 1.5
            : parseInt(
                (this.drawFrom.naturalWidth / (this.drawFrom.naturalWidth * this.scale)).toString()
              );
      }
      let finalHeight = this.drawFrom.naturalHeight;
      if (this.drawFrom.naturalHeight > 300) {
        finalHeight +=
          this.drawFrom.naturalHeight > this.drawFrom.naturalWidth
            ? parseInt(
                (
                  this.drawFrom.naturalHeight /
                  (this.drawFrom.naturalHeight * this.scale)
                ).toString()
              ) / 1.5
            : parseInt(
                (
                  this.drawFrom.naturalHeight /
                  (this.drawFrom.naturalHeight * this.scale)
                ).toString()
              );
      }
      //draw to final canvas
      //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
      this.ctx.drawImage(
        tempCanvas,
        0,
        0,
        scaledW,
        scaledH,
        0,
        0,
        finalWidth, //+ Math.max(24, 25 * this.scale),
        finalHeight //+ Math.max(24, 25 * this.scale)
      );
      //remove temp element
      tempCanvas.remove();
    }
    // draw the image into the canvas

    return this;
  }

  /**
   * Converts image to grayscale
   */
  convertGrayscale() {
    const w = this.drawTo.width;
    const h = this.drawTo.height;
    var imgPixels = this.ctx.getImageData(0, 0, w, h);
    for (var y = 0; y < imgPixels.height; y++) {
      for (var x = 0; x < imgPixels.width; x++) {
        var i = y * 4 * imgPixels.width + x * 4;
        var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
        imgPixels.data[i] = avg;
        imgPixels.data[i + 1] = avg;
        imgPixels.data[i + 2] = avg;
      }
    }
    this.ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return this;
  }

  /**
   * converts image to palette using the defined palette or default palette
   */
  convertPalette() {
    const w = this.drawTo.width;
    const h = this.drawTo.height;
    var imgPixels = this.ctx.getImageData(0, 0, w, h);
    for (var y = 0; y < imgPixels.height; y++) {
      for (var x = 0; x < imgPixels.width; x++) {
        var i = y * 4 * imgPixels.width + x * 4;
        //var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
        const finalcolor = this.similarColor([
          imgPixels.data[i],
          imgPixels.data[i + 1],
          imgPixels.data[i + 2],
        ]);
        imgPixels.data[i] = finalcolor[0];
        imgPixels.data[i + 1] = finalcolor[1];
        imgPixels.data[i + 2] = finalcolor[2];
      }
    }
    this.ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return this;
  }

  public resizeImage() {
    if (!this.maxWidth && !this.maxHeight) {
      return 0;
    }

    const canvasCopy = document.createElement('canvas');
    const copyContext = canvasCopy.getContext('2d');
    const ratio = (() => {
      if (this.maxWidth && this.drawTo.width > this.maxWidth) {
        return this.maxWidth / this.drawTo.width;
      }
      if (this.maxHeight && this.drawTo.height > this.maxHeight) {
        return this.maxHeight / this.drawTo.height;
      }
      return 1.0;
    })();

    canvasCopy.width = this.drawTo.width;
    canvasCopy.height = this.drawTo.height;

    if (copyContext) {
      copyContext.drawImage(this.drawTo, 0, 0);
    }

    this.drawTo.width = this.drawTo.width * ratio;
    this.drawTo.height = this.drawTo.height * ratio;
    this.ctx.drawImage(
      canvasCopy,
      0,
      0,
      canvasCopy.width,
      canvasCopy.height,
      0,
      0,
      this.drawTo.width,
      this.drawTo.height
    );

    return this;
  }

  public draw() {
    this.drawTo.width = this.drawFrom.width;
    this.drawTo.height = this.drawFrom.height;
    this.ctx.drawImage(this.drawFrom, 0, 0);
    this.resizeImage();
    return this;
  }

  public saveImage() {
    const link = document.createElement('a');
    link.download = 'pxArt.png';
    link.href = this.drawTo.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    const el = document.querySelector('body');
    if (el) {
      el.appendChild(link);
      link.click();
      el.removeChild(link);
    }
  }

  //end class
}
