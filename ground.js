class Ground {
    constructor(x,y,) {
      var options = {
          isStatic: true
      }
      this.body = Matter.Bodies.rectangle(x,y,800,10,options);
      Matter.World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, 800,10);
    }
  };