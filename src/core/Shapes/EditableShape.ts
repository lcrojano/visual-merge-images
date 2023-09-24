abstract class EditableShape extends DrawableShape implements Draggable, removable, Selectable{
    toggleMoving(): boolean {
        throw new Error("Method not implemented.");
    }
    onMouseMove(event: MouseEvent) {
        throw new Error("Method not implemented.");
    }
    onMouseUp(event: MouseEvent) {
        throw new Error("Method not implemented.");
    }
    onMouseDown(event: MouseEvent) {
        throw new Error("Method not implemented.");
    }
    move?(dx: number, dy: number): void {
        throw new Error("Method not implemented.");
    }
    dragStart(): void {
        throw new Error("Method not implemented.");
    }
    dragEnd(): void {
        throw new Error("Method not implemented.");
    }
    remove(): void {
        throw new Error("Method not implemented.");
    }
    isSelected(): boolean {
        throw new Error("Method not implemented.");
    }
    select(): void {
        throw new Error("Method not implemented.");
    }
    deselect(): void {
        throw new Error("Method not implemented.");
    }

}