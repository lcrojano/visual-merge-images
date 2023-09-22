interface ICanvas {
    drawImage(image:HTMLImageElement,dx:number, dy:number): void;
    clear(): void;
    getCanvasData(): ImageData;
    resize():void,
    zoom():void,
    draw():void
  }