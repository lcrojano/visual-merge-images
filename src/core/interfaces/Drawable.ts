interface Drawable  {
    draw(posX?:number, posY?:number): void;
    isMouseOver(x: number, y: number): boolean;   
    getBoundingBox(): DOMRect;
}