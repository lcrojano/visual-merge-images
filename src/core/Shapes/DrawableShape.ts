abstract class DrawableShape implements Drawable {
    abstract id: string;
    abstract name: string;
    abstract width: number;
    abstract height: number;
    abstract dx: number ;
    abstract dy: number ;
    constructor(protected canvas: Canvas) {}
    getBoundingBox(): DOMRect {
        throw new Error("Method not implemented.");
    }
   
    abstract draw(): void;

    abstract isMouseOver(cursorX: number, cursorY: number): boolean;

}
