class ImageComponent implements IImage {
  image!: HTMLImageElement;
  dx!: number;
  dy!: number;
  width!: number;
  height!: number;
  canvas!: ICanvas;
  constructor(canvas: ICanvas, file: File, dx: number, dy: number) {
    this.canvas = canvas;
    this.image = new Image();
    this.image.src = URL.createObjectURL(file);
    this.image.onload = () => {
      this.width = this.image.naturalWidth;
      this.height = this.image.naturalHeight;
    };
    this.dx = dx;
    this.dy = dy;
  }
 
  draw(dx?: number, dy?: number): void {
    this.canvas.drawImage(this.image, dx ?? 0, dy ?? 0);
  }
}
