class ImageDraw extends EditableShape   {
  isMouseOver(cursorX: number, cursorY: number): boolean {
    const rect = this.image.getBoundingClientRect();
    cursorX -= rect.left;
    cursorY -= rect.top;
    if (
      cursorX >= this.dx &&
      cursorX <= this.image.width + cursorX &&
      cursorY >= this.dy &&
      cursorY <= this.image.height + cursorY
    ) {
      // Handle the event as needed.
      return true;
    }

    return false;
  }
  handleClick(): void {
    throw new Error("Method not implemented.");
  }
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

  constructor(drawableImage: DrawableShape, file: File, canvas: Canvas) {
    super(canvas);
    if (file) {
      this.id = drawableImage.id;
      this.name = drawableImage.name;
      this.canvas = canvas;
      this.ctx = canvas.getContext();
      this.image = new Image();
      this.image.src = URL.createObjectURL(file);
      this.getSize();
      this.canvas.addDraw(this);
      this.isMoving = false;
    } else {
      throw new Error("Not File uploaded");
    }
  }

  getSize():any{
    const size = () => {
        this.width = this.image.naturalWidth;
        this.height = this.image.naturalHeight;
    };

    if (this.image.complete) {
      size();
    } else {
      this.image.onload = size;
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
