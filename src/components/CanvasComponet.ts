class CanvasComponent extends Display {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  dx: number = 0;
  dy: number = 0;
  private drawables: Drawable[] = [];
  id: string;
  name: string;
  color?: string | undefined;
  clickedDrawable: ImageDraw | undefined;

  constructor(drawable: DrawableShape) {
    super();
    this.canvas = document.getElementById(drawable.id) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.id = drawable.id;
    this.width = drawable.width;
    this.height = drawable.height;
    this.name = drawable.name;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.canvas.addEventListener("mousedown", this.onMouseDown);
    this.canvas.addEventListener("mouseup", this.onMouseUp);
    this.canvas.addEventListener("mousemove", this.onMouseMove);
  }

  addDraw(drawable: Drawable): void {
    this.drawables.push(drawable);
    console.log("added", drawable);
    this.clear();
    this.draw();
  }
  private onMouseMove = (event: MouseEvent): void => {
    const cursorX = event.offsetX;
    const cursorY = event.offsetY;
    this.clear();
    this.draw();
    if (this.clickedDrawable?.isMoving) {
      this.clickedDrawable.getSize();
      this.clickedDrawable.dx = cursorX - this.clickedDrawable.width/2   ;
      this.clickedDrawable.dy = cursorY  - this.clickedDrawable.height/2;
      
      this.ctx.fillText(`image position: ${this.clickedDrawable.dx}, ${this.clickedDrawable.dy}`, 10, 50);
      this.ctx.fillText(`image heigs: ${this.clickedDrawable?.width}, ${this.clickedDrawable?.height}`, 10, 60);

    }
   
    this.ctx.fillText(`Mouse position: ${cursorX}, ${cursorY}`, 10, 30);

  }; 
  private onMouseUp = (event: MouseEvent): void => {
    console.log("Mouse up");
    this.clickedDrawable ? (this.clickedDrawable.isMoving = false) : undefined;
  };
  private onMouseDown = (event: MouseEvent): void => {
    console.log("Mouse Down");
    const cursorX = event.offsetX;
    const cursorY = event.offsetY;
    const drawables = this.drawables;
    this.clickedDrawable = this.getClickDrawable(
      drawables as Image[],
      cursorX as number,
      cursorY as number
    );
    
    this.clickedDrawable ? (this.clickedDrawable.isMoving = true) : undefined;
  };

  getClickDrawable(
    drawables: Image[],
    cursorX: number,
    cursorY: number
  ): ImageDraw | undefined {
    for (let index = 0; index < drawables.length; index++) {
      const drawable = drawables[index] as Image;
      
      if (drawable instanceof ImageDraw) {
        const rect = drawable.image.getBoundingClientRect();
        cursorX -= rect.left;
        cursorY -= rect.top;
      
        if (drawable.isMouseOver(cursorX, cursorY)) {
          // Handle the event as needed.
          this.clear();
          this.draw();
          
          this.ctx.fillText(`Click over: ${drawable.name}`, 50, 50);
          console.log(`Click over: ${drawable.name}`);
          return drawable;
        }
      }
    }
    return undefined;
  }
  draw(): void {
    this.drawables.forEach((drawable) => {
      drawable.draw();
    });
  }
  drawImage(image: HTMLImageElement, dx: number, dy: number): void {
    image.onload = () => {
      this.ctx.drawImage(image, dx ?? 0, dy ?? 0);
      this.drawables.push();
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
  getContext(): CanvasRenderingContext2D {
    return this.ctx;
  }
}
