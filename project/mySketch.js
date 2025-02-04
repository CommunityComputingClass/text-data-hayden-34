let s = [{x: Math.random(0,400), y: Math.random(0,400), w: Math.random(0,400), h: Math.random(0,400)}]

let words;

function keyPressed(){
  s.push({x: random(0,400), y: random(0,400), w: random(0,200), h: random(0,200)})

}




function setup(){
  createCanvas(400, 400)
  for(let i = 500; i > 0; i--){
    s.push({x: random(0,400), y: random(0,400), w: random(0,200), h: random(0,200)})
  }
}

function draw(){
  background(200)


  for(let i in s ){
    noStroke()
    fill(s[i].x, s[i].y, s[i].w, s[i].h)
    ellipse(s[i].x, s[i].y, s[i].w, s[i].h)
  }
  textAlign(CENTER, CENTER)
  fill('black');
  textSize(20)
  text("What is your favorite color?",  100, 100, 200)
  text(words, 100, 200, 200);
}
function collect(){
  words = document.getElementById('input').value

}










/*

let myFont;
let sentence = "Hello, how are you doing today? I brought cookies."
let sentenceArray = sentence.split(' ')
let letItGo;


function setup() {
  createCanvas(400, 400);
  myFont = loadFont("knewave.otf");
  letItGo = loadStrings("letItGo.txt")

  for(let i in sentenceArray){
    console.log(sentenceArray[i])
  }
}

function draw() {
  background(200);
  textFont(myFont)
  //textAlign(CENTER, CENTER)
  text(letItGo, 20, 20, 300)

  
}

*/