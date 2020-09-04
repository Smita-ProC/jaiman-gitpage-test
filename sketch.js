var bullet,wall,thickness;
var speed, weight;
var damage, has_collided;


function setup() {
  createCanvas(1600,400);

  speed = random(223,331);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 50, 50, 30);
  wall = createSprite(1500, 150, 40, 800);
  wall.shapeColor = (80,80,80);

  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);

  if(bullet.isTouching(wall)){
    has_collided = true;
  }

  if(has_collided === true){
    
    bullet.velocityX = 0;
    damage = (0.5 * weight *speed * speed)/(thickness * thickness * thickness);

    if(damage > 10){
      wall.shapeColor = color(255,0,0);
    }

    if(damage < 10){
      wall.shapeColor = color(0,255,0);
    } 
  }

  drawSprites();
}


