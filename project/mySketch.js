let s = [{x: Math.random(0,400), y: Math.random(0,400), w: Math.random(0,400), h: Math.random(0,400)}]
let myFont;
let words;
let question;
let answered = false;
let x = ""
const questions = [
  "What catalyzed the primordial singularity's transmutation into the observable cosmos, and does a pre-spatiotemporal framework exist?",
  "Is the cosmos an unbounded continuum, or does it possess a topologically constrained manifold?",
  "Do hyperdimensional multiverses coalesce through quantum decoherence, and if so, what are their ontological ramifications?",
  "What constitutes the elusive dark matter—supersymmetric particles, axions, or an as-yet-undiscovered fundamental entity?",
  "What is the underlying quintessence driving cosmic inflation, and is dark energy a manifestation of vacuum fluctuations or an artifact of modified gravity?",
  "Does the no-hair theorem imply absolute information obliteration within black holes, or does the holographic principle preserve it?",
  "Is retrocausality theoretically tenable within the framework of closed timelike curves, or is temporal reversibility an emergent illusion?",
  "What occurs within the singularity of a Schwarzschild or Kerr black hole, and does it necessitate a quantum gravity resolution?",
  "Are extra-spatiotemporal dimensions beyond the conventional four empirically verifiable, and do they harbor alternate physical laws?",
  "What is the statistical probability of sapient extraterrestrial civilizations, and does the Fermi paradox imply anthropic selection biases?",
  "Is consciousness an epiphenomenon of neural complexity, or does it possess irreducible quantum mechanical properties?",
  "Why do the dimensionless physical constants exhibit their precise values, and do they arise from anthropic fine-tuning or deeper symmetries?",
  "Is a grand unified theory reconciling quantum field mechanics and general relativity achievable, or is an entirely novel paradigm required?",
  "Does time emerge from thermodynamic entropy gradients, or is it a fundamental geometric property of spacetime?",
  "Could gravitational interactions be technologically harnessed akin to electromagnetic forces, or is the warping of spacetime fundamentally unmanipulable?",
  "Do parallel universes manifest via Everettian quantum mechanics, and if so, is inter-universal communication feasible?",
  "Is the cosmic arrow of time a consequence of initial low-entropy conditions, or does it arise from deeper, still-undiscovered principles?"
];

function keyPressed(){
  s.push({x: random(0,400), y: random(0,400), w: random(0,200), h: random(0,200)})

}




function setup(){
  createCanvas(400, 400)
  myFont = loadFont("knewave.otf");
  question = questions[floor(random(0, questions.length))]
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

  stroke("black")
  strokeWeight(5)
  line(50, 270, 350, 270)

  
  textAlign(CENTER, CENTER)
  fill('black');
  stroke('white')
  strokeWeight(1)
  textSize(20)
  textFont(myFont)
  text(question,  50, 100, 300)
  text(words, 100, 250, 200);
  if(answered){
    textSize(40)
    fill("red")
    if(x.length <= 1){
      text("WRONG. TRY AGAIN", 200, 300)
    }else{
      text("WRONG AGAIN SILLY", 200, 300)
    }
   
    text(x, 200, 360)
  }
}
function collect(){
  words = document.getElementById('input').value
  answered = true;
  x = x+"X"
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