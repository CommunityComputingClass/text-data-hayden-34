let s = [{x: Math.random(0,400), y: Math.random(0,400), w: Math.random(0,400), h: Math.random(0,400)}]
let myFont;
let words;
let question;
let answered = false;
let store;
let threeXSeven = false;
let x = ""
const questions = [
  "What is the meaning of life?",
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
  "Is the cosmic arrow of time a consequence of initial low-entropy conditions, or does it arise from deeper, still-undiscovered principles?","Does quantum entanglement imply a non-local ontology of reality, and can it circumvent relativistic causality?",
  "Is the vacuum of space a seething cauldron of virtual particles, and could zero-point energy be harnessed for technological applications?",
  "Do Gödel's incompleteness theorems suggest that a fully self-consistent theory of everything is epistemologically unattainable?",
  "Could the cosmic microwave background harbor signatures of a pre-Big Bang ekpyrotic or cyclical cosmological model?",
  "Is the Planck scale the ultimate limit of physical divisibility, or does sub-Planckian geometry conceal novel quantum topologies?",
  "Do tachyonic fields imply hypothetical particles capable of superluminal propagation, and how would causality paradoxes be resolved?",
  "Can the AdS/CFT correspondence serve as a holographic blueprint for a unified theory of quantum gravity?",
  "Does the anthropic principle indicate a multiversal ensemble, or is it merely a tautological artifact of observer selection bias?",
  "Are cosmic strings or monopoles relics of primordial phase transitions, and could their detection validate grand unified theories?",
  "Does spontaneous symmetry breaking underpin the emergence of fundamental forces, and how does the Higgs mechanism confer mass?",
  "Is the universe a computational construct, and if so, does the holographic principle imply a finite informational capacity of reality?",
  "Could the phenomenon of quantum decoherence elucidate the emergence of classical reality from the quantum substrate?",
  "Is the observable universe merely a three-dimensional brane embedded in a higher-dimensional bulk spacetime?",
  "Does entropy inevitably culminate in a heat death, or could quantum fluctuations in a de Sitter vacuum enable perpetual cosmogenesis?",
  "Are neutrinos Majorana particles, and could their properties resolve the matter-antimatter asymmetry of the cosmos?",
  "Does the concept of conformal cyclic cosmology propose a perpetually repeating universe, and can we detect signals from prior aeons?",
  "Could axions simultaneously resolve the strong CP problem and constitute a primary candidate for cold dark matter?",
  "Does the Wheeler-DeWitt equation, in the absence of a temporal parameter, imply that time is an emergent rather than fundamental phenomenon?",
  "What is three times seven?"
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
  if(threeXSeven){
    textSize(40)
    fill('green')
    text("Correct!", 200, 300)
  }
}
function collect(){
  store = question
  words = document.getElementById('input').value
  if(question = "What is three times seven?" && words == "21"){
    threeXSeven = true;
    answered = false;
    question = "What is three times seven?"
  }else{
    
    answered = true;
    x = x+"X"
    question = store;
   
    
  }

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