class DrawableFactory {
  createImage(image: DrawableShape, file: File, canvas: Canvas) {
    return new ImageDraw(image, file, canvas);
  }

  createDrawing(type: string): void {
    switch (type) {
      case "circle":
        return;
        break;
      default:
        throw new Error("Type not found");
    }
  }
}
