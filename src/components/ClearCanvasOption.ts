class ClearCanvasOption extends UserOptionShape {
    id!: string;
    name!: string;
    width!: number;
    height!: number;
    dx!: number;
    dy!: number;
    draw(): void {
        throw new Error("Method not implemented.");
    }
    isMouseOver(cursorX: number, cursorY: number): boolean {
        throw new Error("Method not implemented.");
    }
    
}