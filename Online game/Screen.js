class Screen {
  constructor() {
    this.y = height;
  }
  display(anzeige) {
    switch (anzeige) {
      case 'start':
        background('brown');
        textSize(25);
        fill(255);
        text('Ziel-Schiessen', 30, this.y + 80)
        textSize(16);
        text('Spielbeginn: ENTER-Taste drücken \nWenn der Ball oben durch das Tor\nfliegt, gewinnst Du 1 Punkt.\nFliegt der Ball unten raus, \nverlierst Du 1 Punkt.\nGame Over bei 0 Punkten\nSpiel gewonnen mit 10 Punkten\nSpielende nach 120 Sek.\nDer Ball wird mit der Zeit\nschneller und kleiner.\nDer Player wird kürzer.', 30, this.y + 120);
        this.y--;
        if (this.y < 0) this.y = 0;
        break;

      case 'restart':
        background(50, 100, 250);
        stopZeit = sek;
        textSize(25);
        text('Drücke ENTER um neu zu starten', 30, 60);
        break;
        
        case 'gewonnen':
        background(50, 100, 250);
        textSize(35);
        text('Du hast gewonnen!!!', 30, 260);
        gewonnen.play();
        break;

      case 'run':
        sek = startZeit - (millis() - millisOld) / 1000;
        if (sek < 0) run = 'gameOver';
        textSize(16);
        fill(250,200,0);
        text(nfc(sek, 0), width - 150, 50);
        //strokeWeight(30);
        //stroke('red');
       // line(linkerPfosten, 0, rechterPfosten, 0);
        for (let i = 0; i< 6; i++){
          if(i%2===0 ) fill(0);
          else fill(255);
          rect(linkerPfosten + i*torTeil,0,torTeil,10);
        }
        noStroke();
        //Anzeige für Lebenspunkte
        for (let i = 0; i < score; i++) {
          // print('i = ' + i + ', score = ' + score + ', run = '+ run);
          fill(250, 200, 0);
          noStroke();
          circle(30 + i * 25, 40, 20);
        }
        break;

      case 'gameOver':
        background(0);
        textSize(35);
        text('Game Over', 70, 300);
        //gameOver.play();


    }
  }
}