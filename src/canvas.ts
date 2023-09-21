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
  draw(): void {}
  clear(): void {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  getCanvasData(): ImageData {
    throw new Error("Method not implemented.");
  }
  addLocalFiles(files: FileList): void {
    for (const file of files) {
      const image = new Image();
      image.src = URL.createObjectURL(file);
      image.onload = () => {
        this.ctx.drawImage(image, 0, 0);
      };
    }
  }

  // Other methods and properties...
}
