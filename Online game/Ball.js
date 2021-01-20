class Ball {
  constructor(rand, x, y) {
    this.winkel = random(20, 155);
    this.speedGesamt = 4
    this.xSpeed = 3;
    this.ySpeed = 3;
    this.xSpeedStart = this.xSpeed;
    this.ySpeedStart = this.ySpeed;
    this.groesse = 30;
    this.x = x;
    this.y = y;
    //Variable für das Zeitintervall, nach dem der Ball schneller wird
    this.zeitIntervall = 15;
    this.xStart = x;
    this.yStart = y;

    this.farbe = color(0, 100, 250);
    this.rand = rand;
    this.randFarbe = color(0);
    this.xAlt = x;

  }

  update() {
    this.xAlt = this.x;
    //this.x - this.xAlt >0 => Ball läuft von links nach rechts
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
    //this.ySpeed = map(this.ySpeed,0,height, 1, 1.1)
    //rechter Rand
    if (this.x > width - this.groesse / 2) {
      this.xSpeed = this.xSpeed * -1;
     ballWand02.play(); 
    }
    //linker Rand
    if (this.x < this.groesse / 2) {
      this.xSpeed = this.xSpeed * -1;
     ballWand01.play();
    }
    //Reflektion oberer Rand
    if (this.y < this.groesse / 2) {
      //geht der Ball durchs Tor ?
      if (this.x > linkerPfosten && this.x < rechterPfosten) {
        this.x = this.xStart;
        this.y = this.yStart;
        this.winkel = random(20, 155);
        this.xSpeed = this.speedGesamt * cos(this.winkel);
        this.ySpeed = this.speedGesamt * sin(this.winkel);
        score++;
       torCheer.play();
        player.x = width / 2;
        millisOldDelay = millis();
       millisOldConfetti = millis(); 
       
      } else this.ySpeed *= -1;

    }
    // unterer Rand, wo der Ball rausfliegt
    if (this.y > height-10) {
      this.x = this.xStart;
      this.y = this.yStart;
      millisOldDelay = millis();
     
      score--;
      player.x = width / 2;
      if (score < 1) gameOver.play();
      else ballVerloren.play();
    }
    this.schneller();
  }

  schneller() {
    //hier wird das 
    if ((millis() - millisOld) / 1000 > zaehler * this.zeitIntervall) {
      player.breite = player.breite - 10;
      zaehler++;
      if (this.xSpeed < 0) this.xSpeed--;
      else this.xSpeed++;
      if (this.ySpeed < 0) this.ySpeed--;
      else this.ySpeed++;
      this.xSpeed++;
      this.ySpeed++;
      this.speedGesamt = sqrt(sq(this.xSpeed) + sq(this.ySpeed));
    }
  }

  display() {

    strokeWeight(this.rand);
    fill(this.farbe);
    stroke(this.randFarbe);
    circle(this.x, this.y, this.groesse);
  }


}