var car,wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  

  wall = createSprite(1000,200,20,200);
  wall.shapeColor= "gray";
}

function draw() {
  background("black"); 
     
  if(car.velocityX = speed){
    if(wall.x-car.x < (car.width+wall.width)/2){
      car.velocityX = 0;
      var deformation= 0.5* weight*speed*speed/22500;
      if(deformation<100){
       car.shapeColor="green";
      }

      if(deformation > 100 && deformation <180){
       car.shapeColor="yellow";
      } 

      if(deformation>180){
        car.shapeColor="red";
      }
    }
  }
  


  drawSprites();
}