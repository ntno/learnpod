//global variables
int x;
int y;

//setup happens once
void setup(){
  //set size of canvas (width, height)
  size(600,600);

  //set up circle in the center of the canvas
  x = width/2;
  y = height/2;

  //set background color to black (0=black, 255=white)
  background(0);

  //set font color to orange (Red, Green, Blue)
  fill(255, 150, 0);

  //set font style
  PFont myFirstFont = loadFont("courier");

  //sent font size
  textFont(myFirstFont, 14);

  text("click inside the canvas, then use arrow keys to move circle", 50, 50);
}

//draw happens repeatedly
void draw(){
  //update x/y based on left/right/up/down arrows
  move();

  //draw a circle at (x,y)
  ellipse(x, y, 50, 50);
}


void goUp(){
  y = y - 5;
}

void goDown(){
  y = y + 5;
}

void goRight(){
  x = x + 5;
}

void goLeft(){
  x = x - 5;
}

void move(){
  if(keyPressed == true){
    if(key == CODED){
      if(keyCode == UP){
        goUp();
      }
      if(keyCode == DOWN){
        goDown();
      }
      if(keyCode == RIGHT){
        goRight();
      }
      if(keyCode == LEFT){
        goLeft();
      }
    }
  }
}
