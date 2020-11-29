var engine 
var world
var plinkos = []
var dividers = []
var particles = []

function setup() {
  createCanvas(800,800);
  engine = Matter.Engine.create()
  world = engine.world
  for (var i = 40;i < 800; i = i+70){
    plinkos.push(new Plinko(i,70))
  }

  for (var i = 80;i < 800; i = i+70){
    plinkos.push(new Plinko(i,160))
  }

  for (var i = 40;i < 800; i = i+70){
    plinkos.push(new Plinko(i,250))
  }

  for (var i = 80;i < 800; i = i+70){
    plinkos.push(new Plinko(i,340))
  }

  for (var i = 40;i < 800; i = i+70){
    plinkos.push(new Plinko(i,430))
  }


  ground = new Ground(400,795)
 
  for (var i = 70; i< 800;i = i+100){
    dividers.push(new Divider(i,695))
  }

}

function draw() {
  background("black"); 
  Matter.Engine.update(engine) 
  for (var i = 0;i < plinkos.length; i = i+1){
    plinkos[i].display()
  }
  for (var i = 0; i< dividers.length;i = i+1){
    dividers[i].display()
  }
  createParticles()
  for (var i = 0; i < particles.length; i++){
    particles[i].display()
  }
  ground.display()
}

function createParticles(){
  if (frameCount % 60 === 0){
    particles.push(new Particle (random(10,790),0))   
  }
}