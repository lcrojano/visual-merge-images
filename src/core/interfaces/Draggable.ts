interface Draggable{
    toggleMoving():boolean;
    onMouseMove(event:MouseEvent):any;
    onMouseUp(event:MouseEvent):any;
    onMouseDown(event:MouseEvent):any;
    
    move?(dx: number, dy: number): void;
    dragStart(): void;
    dragEnd(): void;
}