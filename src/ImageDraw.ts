class ImageDraw extends DrawableElement {
  image!: HTMLImageElement;
  dx: number = 0;
  dy: number = 0;
  width!: number;
  height!: number;
  ctx!: CanvasRenderingContext2D;
  isMoving: boolean = false;
  id!: string;
  name!: string;
  color?: string | undefined;

  constructor(drawableImage: DrawableElement, file: File, canvas: Canvas) {
    super(canvas);
    if (file) {
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
      this.canvas.addDraw(this);
    } else {
      throw new Error("Not File uploaded");
    }
  }

  draw(): void {
    const drawImage = () => {
      this.ctx.drawImage(this.image, this.dx ?? 0, this.dy ?? 0);
    };

    if (this.image.complete) {
      drawImage();
    } else {
      this.image.onload = drawImage;
    }
  }
}
