interface IDraggable{
    toggleMoving():boolean;
    onMouseMove(event:MouseEvent):any;
    onMouseUp(event:MouseEvent):any;
    onMouseDown(event:MouseEvent):any;
}