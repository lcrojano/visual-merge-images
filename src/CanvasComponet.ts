class CanvasComponent implements ICanvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private width: number;
  private height: number;

  constructor(id: string, width: number, height: number) {
    this.canvas = document.getElementById(id) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.width = width;
    this.height = height;
    this.canvas.width = width;
    this.canvas.height = height;
  }
  draw(): void {
    throw new Error("Method not implemented.");
  }
  drawImage(image: HTMLImageElement, dx: number, dy: number): void {
    image.onload = () => {
      this.ctx.drawImage(image, dx ?? 0, dy ?? 0);
    };
  }
  resize(): void {
    throw new Error("Method not implemented.");
  }
  zoom(): void {
    throw new Error("Method not implemented.");
  }

  clear(): void {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  getCanvasData(): ImageData {
    throw new Error("Method not implemented.");
  }
}
