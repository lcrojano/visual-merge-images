interface ICanvas extends IDrawable  {
    addDrawable(drawable:IDrawable):void,
    getContext(): CanvasRenderingContext2D;
    clear(): void;
    resize():void,
    zoom():void,
    draw(image?:HTMLImageElement,dx?:number, dy?:number,): void;
  }