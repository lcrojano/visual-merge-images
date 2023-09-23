abstract class DrawableElement implements Drawable {
    abstract id: string;
    abstract name: string;
    abstract width: number;
    abstract height: number;
    abstract dx: number ;
    abstract dy: number ;
    constructor(protected canvas: Canvas) {}
    abstract draw(): void;
}
