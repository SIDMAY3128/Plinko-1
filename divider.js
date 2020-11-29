class Divider{
    constructor(x,y){
    var options = {
        isStatic:true
    }
    this.body = Matter.Bodies.rectangle(x,y,10,200,options)
    Matter.World.add(world,this.body)
    }
    display(){
        fill("white")
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,10,200)
    }
}