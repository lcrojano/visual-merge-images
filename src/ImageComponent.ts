class ImageComponent implements IImage {
  image!: HTMLImageElement;
  dx: number = 0;
  dy: number = 0;
  width!: number;
  height!: number;
  canvas!: ICanvas;
  ctx!: CanvasRenderingContext2D;
  isMoving: boolean;
  id: string;
  name: string;
  color?: string | undefined;
 
  constructor(drawableImage: IImage, file: File, canvas: ICanvas) {
    this.id = drawableImage.id;
   
    this.name = drawableImage.name;
    this.canvas = canvas;
    this.ctx = canvas.getContext();
    this.image = new Image();
    this.image.src = URL.createObjectURL(file);
    this.image.onload = () => {
      this.width = this.image.naturalWidth;
      this.height = this.image.naturalHeight;
    };
    this.isMoving = false;
    this.canvas.addDrawable(this);
  }

  draw(
   
  ): void {
    const drawImage = () => {
      this.ctx.drawImage(this.image, this.dx ?? 0,  this.dy ?? 0);
    };
  
    if (this.image.complete) {
      drawImage();
    } else {
      this.image.onload = drawImage;
    }
  }

  clear(): void {
    throw new Error("Method not implemented.");
  }
  getCanvasData(): ImageData {
    throw new Error("Method not implemented.");
  }
  resize(): void {
    throw new Error("Method not implemented.");
  }
  zoom(): void {
    throw new Error("Method not implemented.");
  }
}
