abstract class Display extends DrawableFactory implements Canvas{
    abstract width: number;
    abstract height: number;
    abstract dx: number;
    abstract dy: number ;
    abstract addDraw(drawable: Drawable): void 
    abstract draw(image?: HTMLImageElement | undefined, dx?: number | undefined, dy?: number | undefined): void 
    abstract getContext(): CanvasRenderingContext2D
    abstract clear(): void 
    constructor(){
        super();
    }

}