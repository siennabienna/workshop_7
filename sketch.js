// let ball = { 
//   x: 200, 
//   y: 200 
//   } 

// let ball1, ball2;

let bedbugs = [];

let bedbugImgs = [];
let bedImg;

function preload() {
  bedbugImgs.push(loadImage("BEDBUG1.png"));
  bedbugImgs.push(loadImage("BEDBUG2.png"));
  bedbugImgs.push(loadImage("BEDBUG3.png"));
  bed = loadImage("BED.png");
}

let bedOffsetX = 50;
let bedOffsetY = 140;
let bedSizeX = 280;
let bedSizeY = 200;

function setup() {
  createCanvas(400, 400);

  for (x = 0; x < 60; x++) {
    let rx = random(bedOffsetX + 15, bedOffsetX + bedSizeX - 15);
    let ry = random(bedOffsetY + 15, bedOffsetY + bedSizeY - 15);
    let rr = random(5, 20);
    bedbugs.push(new Bedbug(rx, ry, rr));
  }
}

function draw() {
  image(bed, 0, 0, 400, 400);

  textAlign(CENTER, CENTER);
  text("Oh No! You've got bedbugs,", 200, 40);

  for (x = 0; x < bedbugs.length; x++) {
    bedbugs[x].scuttle();
    bedbugs[x].show();
    bedbugs[x].checkEdges();
  }

}

class Bedbug {

  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  scuttle() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  show() {
    image(random(bedbugImgs), this.x, this.y, this.r, this.r);
  }

  checkEdges() {
    if (this.x < bedOffsetX + 15) {
      this.x =  bedOffsetX + 15;
    } else if (this.x > bedOffsetX + bedSizeX - 15) {
      this.x = bedOffsetX + bedSizeX - 15;
    }
    if (this.y < bedOffsetY + 15) {
      this.y =  bedOffsetY + 15;
    } else if (this.y > bedOffsetY + bedSizeY - 15) {
      this.y = bedOffsetY + bedSizeY - 15;
    }

  }
}