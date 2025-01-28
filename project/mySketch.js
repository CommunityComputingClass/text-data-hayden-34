

/*function setup(){
  createCanvas(400, 400)
}

function draw(){
  background(200)
  ellipse(mouseX, mouseY, 20, 20)
}

*/


















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