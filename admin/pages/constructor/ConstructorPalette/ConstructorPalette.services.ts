/**
 * pixelit - convert an image to Pixel Art, with/out grayscale and based on a color palette.
 * @author José Moreira @ <https://github.com/giventofly/pixelit>
 **/
type PixelItColor = [number, number, number];
type PixelItPalette = PixelItColor[];

interface PixelItParams {
  to: HTMLCanvasElement;
  from: HTMLImageElement;
  scale?: number;
  palette: PixelItPalette;
  maxHeight?: number;
  maxWidth?: number;
}

export class PixelIt {
  private to: HTMLCanvasElement;
  private from: HTMLImageElement;
  private scale: number;
  private palette: PixelItPalette;
  private maxHeight?: number;
  private maxWidth?: number;
  private ctx: CanvasRenderingContext2D;

  constructor(config: PixelItParams) {
    this.to = config.to;
    this.from = config.from;
    //range between 0 to 100
    this.scale =
      config.scale && config.scale > 0 && config.scale <= 50 ? config.scale * 0.01 : 8 * 0.01;
    this.palette = config.palette;
    this.maxHeight = config.maxHeight;
    this.maxWidth = config.maxWidth;
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
  private similarColor(actualColor: PixelItColor) {
    let selectedColor: any[] = [];
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
  pixelate() {
    this.to.width = this.from.naturalWidth;
    this.to.height = this.from.naturalHeight;
    let scaledW = this.to.width * this.scale;
    let scaledH = this.to.height * this.scale;

    //make temporary canvas to make new scaled copy
    const tempCanvas = document.createElement('canvas');

    // Set temp canvas width/height & hide (fixes higher scaled cutting off image bottom)
    tempCanvas.width = this.to.width;
    tempCanvas.height = this.to.height;
    tempCanvas.style.visibility = 'hidden';
    tempCanvas.style.position = 'fixed';
    tempCanvas.style.top = '0';
    tempCanvas.style.left = '0';

    //corner case of bigger images, increase the temporary canvas size to fit everything
    if (this.to.width > 900 || this.to.height > 900) {
      //fix sclae to pixelate bigger images
      this.scale *= 0.5;
      scaledW = this.to.width * this.scale;
      scaledH = this.to.height * this.scale;
      //make it big enough to fit
      tempCanvas.width = Math.max(scaledW, scaledH) + 50;
      tempCanvas.height = Math.max(scaledW, scaledH) + 50;
    }
    // get the context
    const tempContext = tempCanvas.getContext('2d') as CanvasRenderingContext2D;
    // draw the image into the canvas
    tempContext.drawImage(this.from, 0, 0, scaledW, scaledH);
    document.body.appendChild(tempCanvas);
    //configs to pixelate

    this.ctx.imageSmoothingEnabled = false;

    //calculations to remove extra border
    let finalWidth = this.from.naturalWidth;
    if (this.from.naturalWidth > 300) {
      finalWidth +=
        this.from.naturalWidth > this.from.naturalHeight
          ? parseInt(this.from.naturalWidth / (this.from.naturalWidth * this.scale)) / 1.5
          : parseInt(this.from.naturalWidth / (this.from.naturalWidth * this.scale));
    }
    let finalHeight = this.from.naturalHeight;
    if (this.from.naturalHeight > 300) {
      finalHeight +=
        this.from.naturalHeight > this.from.naturalWidth
          ? parseInt(this.from.naturalHeight / (this.from.naturalHeight * this.scale)) / 1.5
          : parseInt(this.from.naturalHeight / (this.from.naturalHeight * this.scale));
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
    this.convertPalette();

    return this;
  }

  /**
   * converts image to palette using the defined palette or default palette
   */
  private convertPalette() {
    const w = this.to.width;
    const h = this.to.height;
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

  /**
   * Resizes image proportionally according to a max width or max height
   * height takes precedence if definied
   */
  resizeImage() {
    //var ctx = canvas.getContext("2d")
    const canvasCopy = document.createElement('canvas');
    const copyContext = canvasCopy.getContext('2d') as CanvasRenderingContext2D;
    let ratio = 1.0;

    //if none defined skip
    if (!this.maxWidth && !this.maxHeight) {
      return 0;
    }

    if (this.maxWidth && this.to.width > this.maxWidth) {
      ratio = this.maxWidth / this.to.width;
    }
    //max height overrides max width
    if (this.maxHeight && this.to.height > this.maxHeight) {
      ratio = this.maxHeight / this.to.height;
    }

    canvasCopy.width = this.to.width;
    canvasCopy.height = this.to.height;
    copyContext.drawImage(this.to, 0, 0);

    this.to.width = this.to.width * ratio;
    this.to.height = this.to.height * ratio;
    this.ctx.drawImage(
      canvasCopy,
      0,
      0,
      canvasCopy.width,
      canvasCopy.height,
      0,
      0,
      this.to.width,
      this.to.height
    );

    return this;
  }

  /**
   * draw to canvas from image source and resize
   *
   */
  draw() {
    //draw image to canvas
    this.to.width = this.from.width;
    this.to.height = this.from.height;
    //draw
    this.ctx.drawImage(this.from, 0, 0);
    //resize is always done
    this.resizeImage();
    return this;
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
