interface Canvas {
    addDraw(drawable:Drawable):void,
    draw(image?:HTMLImageElement,dx?:number, dy?:number,): void;
    getContext(): CanvasRenderingContext2D;
    clear(): void;
  }