function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#cce3de")
  noFill()
  rectMode(CENTER)
  stroke(255)

  for(var a=0;a<int(height/50);a++)
  {
      for(var i=0;i<int(width/50);i++)
    {
      stroke(mouseX%256,mouseY%256,256)
      rect(25+(i*50),25+(a*50),50+mouseX/25)
      stroke(256,mouseX%256,mouseY%256)
      ellipse(25+(i*50),25+(a*50),50+mouseX/25)
      stroke(mouseY%256,256,mouseX%256)
      rect(50+(i*50),50+(a*50),25+mouseX/25)
    }
  }
  
  
}