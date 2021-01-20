class Confetti {
  constructor(){
    this.x = width/2;
    this.y = 0;
    this.xSpeed = random(-5,5);
    this.ySpeed = random(3,5);
    this.farbe = color(random(255),random(255),random(255));
    this.size = random(5,10);
    
  }
  update(){
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
  }
  display(){
    fill(this.farbe);
    circle(this.x, this.y,this.size );
  }
}