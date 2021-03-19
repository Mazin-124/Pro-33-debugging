var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var Divisions = [];
var Ground;
var divisionHeight=300;
var score =0;
var particle;
var count = 0

var gameState = "play";
var gameState = "end"
function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  
  Ground = new ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k+200) 
   {
    Divisions.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);

  textSize(20)
  text("100",100,500)
  
  textSize(20)
  text("500",300,500)
  
  textSize(20)
  text("200",500,500)
  
  textSize(20)
  text("500",700,500)
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score = score+500
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     Divisions[k].display();
   }

   if(particle!=null){
     particle.display();

     if(particle.body.position.y>760){

      if(particle.body.position.x<300){
        score = score+500
        particle = null
      }
     }
   }
}
function mousePressed(){
  if(gameState!== "end"){
    particle = new Particle(mouseX, 10, 10, 10);
  }
}