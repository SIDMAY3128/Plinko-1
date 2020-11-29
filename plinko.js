class Plinko {
    constructor(x,y){
        var options = {
            isStatic : true
        }

        this.body = Matter.Bodies.circle(x,y,7.5,options)
        Matter.World.add(world,this.body)
    }

    display(){
        fill("white")
        circle(this.body.position.x,this.body.position.y,15)

    
    }
}