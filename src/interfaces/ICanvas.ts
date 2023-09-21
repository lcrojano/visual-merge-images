interface ICanvas {
    draw(): void;
    addLocalFiles(File:FileList): void;
    clear(): void;
    getCanvasData(): ImageData;
  }