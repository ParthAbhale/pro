class Tree{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true})
        this.image = loadImage("tree.png")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        fill("brown")
        rectMode(CENTER)
        image(this.image,pos.x,pos.y,500,600)
        // rect(pos.x,pos.y,width,20)
    }
}