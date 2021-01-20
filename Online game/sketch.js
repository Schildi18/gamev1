let player, ball;
let linkerPfosten, rechterPfosten;
let score;
let startZeit, stopZeit, sek, run, millisOld, zaehler;
let startFont;
let millisOldDelay;
let millisOldConfetti;
let confetti = [];
let screen;
let ballPlayer, ballWand, torCheer, gameOver, gewonnen;
let torTeil;

function preload() {
  startFont = loadFont('startFont.ttf');
  ballPlayer = loadSound('assets/pong03.mp3');
  ballWand01 = loadSound('assets/pong01.mp3');
   ballWand02 = loadSound('assets/pong02.mp3');
  torCheer = loadSound('assets/torCheer.mp3');
  gameOver = loadSound('assets/gameOver.mp3');
  gewonnen = loadSound('assets/gewonnen.mp3');
  ballVerloren = loadSound('assets/missed.mp3')
}

function setup() {
  createCanvas(600, 600);
  player = new Player();
  ball = new Ball(1, width / 2, 250);
  linkerPfosten = width / 2 - 100;
  rechterPfosten = width / 2 + 100;
  torTeil = (rechterPfosten-linkerPfosten)/6;
  
  score = 3;
  startZeit = 120;
  stopZeit = 120;
  run = 'start';
  textFont(startFont);
  sek = 0;
  zaehler = 1;
  millisOldDelay = 0;
  screen = new Screen();
  angleMode(DEGREES);
}

function draw() {

  if (score < 1 || run === 'gameOver') {
    run = 'gameOver'
    screen.display('gameOver');
  }
  if (score > 9) {
    run = 'gewonnen'
    screen.display('gewonnen');
  }
  if (run === 'start') screen.display('start');
  if (run === 'run') {
    background(0, 120, 0);
    screen.display('run');
    player.update();
    player.display();
    //kurze Pause, nachdem der Ball rausgeflogen ist
    if (millis() > millisOldDelay + 1000) {
      ball.update();
    } //delay
    //Konfetti-Regen
    if (millis() < millisOldConfetti + 2500) {
       
      confetti.push(new Confetti());
      for (let i = 0; i < confetti.length; i++) {
        //print("millisOldConfetti gesetzt");
        confetti[i].update();
        confetti[i].display();
        if (confetti[i].y > height - 100) confetti.splice(i, 1);
      }
    }
   else confetti = [];
    ball.display();
  }


}

function keyPressed() {
  if (keyCode === ENTER) {
    run = 'run';
    millisOld = millis();
    startZeit = stopZeit;
  }
  if (key === 'r') {
    run = 'run';
    score = 3;
    startZeit = 120;
    stopZeit = 120;
    sek = 0;
    zaehler = 1;
    millisOld = millis();
    millisOldDelay = 0;
    ball.xSpeed = 3;
    ball.ySpeed = 3;
    ball.speedGesamt = 4;
    player.x = width / 2;
    player.breite = 120;
  }

}