interface IDrawable  {
    id:string;
    name:string,
    color?:string,
    dx:number,
    dy:number,
    width:number,
    height:number,
    draw():void;
}