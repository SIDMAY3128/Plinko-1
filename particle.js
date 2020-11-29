class Particle {
    constructor(x,y){
        this.colour = color(random(0,255),random(0,255),random(0,255))
        var options = {
            restitution: 0.5
        }
        this.body = Matter.Bodies.circle(x,y,6.5,options)
        Matter.World.add(world,this.body)
    }
    display(){
        fill(this.colour)
        circle(this.body.position.x,this.body.position.y,13)
    }

}