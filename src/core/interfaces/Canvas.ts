interface Canvas {
    addDraw(drawable:Drawable):void,
    draw(): void;
    getContext(): CanvasRenderingContext2D;
    clear(): void;
  }