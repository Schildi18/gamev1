class Player {
  constructor() {

    this.x = width / 2;
    this.breite = 150;
  }

  update() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 15;
      if (this.x < 0) this.x = 0;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 15;
      if (this.x > width - this.breite) this.x = width - this.breite;
    }
    //y-Höhe des Players abgefrag
    if ((ball.y) > height - 30 - ball.groesse / 2) {
      // liegt der Ball rechts vom linken oberen Eck des Players
      if (ball.x > this.x) {
        //ist der Ball links vom rechten Eck des Player bzw. über dem Player
        if (ball.x < this.x + this.breite) {

          //Das ist die mitte des Players. Er wird ja von oben links gezeichnet
          let pos1 = this.x + this.breite / 2;
          //Das ist der Abstand des Balles von der Mitte des Players
          let pos2 = ball.x - pos1;
          // Faktor, der nicht grösser als 1 wird, also eine Normierung
          let winkel = map(pos2, -this.breite/2, this.breite/2 , 150, 30);
          ball.xSpeed = cos(winkel) * ball.speedGesamt;
          
          ball.ySpeed = Math.abs(sin(winkel) * ball.speedGesamt);
          //if (pos2 < 0) ball.xSpeed *=-1;
         // print('ball.xSpeed = ' + nfc(ball.xSpeed,1) + ', winkel = ' + nfc(winkel,1) + ', cos(winkel) = ' + nfc(cos(winkel),1) );
          ball.ySpeed *= -1;
          ballPlayer.play();
        }
      }
    }
  }

  display() {
    fill(255);
    strokeWeight(1);
    stroke(0, 0, 0);
    rect(this.x, height - 20, this.breite, 10);
  }


}