class CanvasComponent implements ICanvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
   width: number;
   height: number;
   dx: number = 0;
   dy: number = 0;
  private drawables:(IDrawable)[] = [];
   id: string;
   name: string;
   color?: string | undefined;
  clickedDrawable: ImageComponent | undefined;
 

  constructor(drawable:IDrawable) {
    this.canvas = document.getElementById(drawable.id) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.id = drawable.id;
    this.width = drawable.width;
    this.height = drawable.height;
    this.name = drawable.name;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.canvas.addEventListener("mousedown",this.onMouseDown)
    this.canvas.addEventListener("mouseup",this.onMouseUp)
    this.canvas.addEventListener("mousemove",this.onMouseMove)
  }

  addDrawable(drawable: IDrawable): void {
    this.drawables.push(drawable);
    console.log("added", drawable);
    this.clear();
    this.draw();
   
  }
  private onMouseMove = (event:MouseEvent): void => {
    const x = event.offsetX;
    const y = event.offsetY;
    if(this.clickedDrawable?.isMoving){
      this.clickedDrawable.dx = x;
      this.clickedDrawable.dy = y;
    }
    this.clear();
    this.draw();
    this.ctx.fillText(`Mouse position: ${x}, ${y}`, 10, 50);
    
  }
  private onMouseUp = (event:MouseEvent): void => {
    console.log("Mouse up");
    this.clickedDrawable ?  this.clickedDrawable.isMoving = false : undefined;
     
  }
  private onMouseDown = (event: MouseEvent): void => {
    console.log("Mouse Down");
    const x = event.offsetX;
    const y = event.offsetY;
    const drawables = this.drawables;
    this.clickedDrawable = this.getClickDrawable(drawables as IImage[],x as number,y as number);
    this.clickedDrawable ? this.clickedDrawable.isMoving = true : undefined ;
  };

  getClickDrawable(drawables:IImage[],x:number,y:number) : ImageComponent | undefined {
    for (let index = 0; index < drawables.length; index++) {
      const drawable = drawables[index] as IImage;
  
      // Check if the drawable is an instance of the IImage interface.
      if (drawable instanceof ImageComponent) {
        // Check if the mouse is inside the image.
        const rect = drawable.image.getBoundingClientRect();
         x = x - rect.left;
         y = y - rect.top;
  
        if (x >= drawable.dx && x <= drawable.image.width + x && y >= drawable.dy && y <= drawable.image.height + y) {
          // Handle the event as needed.
          this.clear();
          this.draw();
          this.ctx.fillText(`Click over: ${drawable.name}`, 50, 50);
          console.log(`Click over: ${drawable.name}`);
          return drawable;
        }
      } 
    
    }  return undefined;
  }
  draw(): void {
    this.drawables.forEach((drawable) => {
      drawable.draw();
    });
  }
  drawImage(image: HTMLImageElement, dx: number, dy: number): void {
    image.onload = () => {
      this.ctx.drawImage(image, dx ?? 0, dy ?? 0);
      this.drawables.push()
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
