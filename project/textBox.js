let contents = "";
let messages = []
let button
let textBox; 
function setup() {
    createCanvas(400, 400)
    background(200);
    button = createButton("show");
    button.position(176,80)
    button.mousePressed(showText)

    
   
    textBox = createInput("")
    textBox.size(300,40)
    textBox.position(50,200)
    textBox.input(storeText)
  
  
    
}

function draw() {
  for(let i = messages.length; i >= 0; i--){
    text(messages[i],50, 180-i*15)
  }

  //line(200, 0, 200, 400)
}


function showText(){ 
  messages.push(contents)

    //textBox.hide(); 
    //text(contents, 200, 200)
}

function storeText(){
    contents = this.value(); 
  }