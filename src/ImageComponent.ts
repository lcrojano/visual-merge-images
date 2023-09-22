class ImageComponent implements IImage, IDraggable {
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
  isMoving: boolean = false;
  onMouseMove(): void {
    throw new Error("Method not implemented.");
  }
  onMouseUp(): void {
    throw new Error("Method not implemented.");
  }
  onMouseDown(): void {
    throw new Error("Method not implemented.");
  }
 
  draw(dx?: number, dy?: number): void {
    this.canvas.drawImage(this.image, dx ?? 0, dy ?? 0);
  }
}
