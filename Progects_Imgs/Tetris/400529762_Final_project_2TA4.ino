#include "LedControl.h"
#include "DFRobot_RGBLCD1602.h"

 
// pins and their corresponding variables
const int DIN_PIN = 11;
const int CLK_PIN= 13;
 const int CS_PIN = 10;
const int JOY_X= A0;
const int JOY_Y = A1;
const int JOY_BTN= 2;


 DFRobot_RGBLCD1602 lcd(0x6B, 16, 2);
 
// initializing the led matrix using LedContro.h and an led object is created: DIN, CLK, CS, number of matrix
LedControl lc = LedControl(DIN_PIN, CLK_PIN, CS_PIN, 4);
 
//the game board
//we have 32 rows and each byte represents 8 columns (1 = led on and 2 = led off)
byte gameBoard[32 ] =  {0};
byte displayBoard[32] = {0};
 
 
byte currentShape[4] = {0,0,0,0};
int shapeHeight = 0;
int shapeWidth = 0;
// start point for where the shapes fall ( this represents the anchor point of our shapes left corner)
volatile int pieceX = 3;
volatile int pieceY = 32-shapeHeight;
 
unsigned long lastJoyTime = 0;
 
unsigned long lastDropTime = 0;
int dropSpeed = 300;
bool gameOver = false;
volatile int score = 0;
volatile int last_score = -1; // so the first time it updates it
bool game_done = false;

 
void setup() {
  Serial.begin(9600);
  pinMode(JOY_BTN, INPUT_PULLUP);
 
  randomSeed(analogRead(A5));
 
  // Initializing all of the 4 matrix
  for (int i =  0; i < 4; i++) {
    lc.shutdown(i, false);  //
    lc.setIntensity(i, 2);  //  the rang is [ 0 to 15]
    lc.clearDisplay(i);     // Clear screen
  }
  for (int i = 0; i < 32; i++) {
  gameBoard[i] = 0;
  }
  lcd.init(); 
  lcd.setCursor(0,0);
  lcd.print("Game Starting...");
  delay(5000);
  lcd.clear();
  spawnPiece(); // spawning the first piece
  }
 
void loop() {
  if(gameOver == false){
  handleJoystick();
  applyGravity();
  drawFrame();

  if ( last_score != score){
    lcd.clear();
    lcd.print("score: ");
    lcd.print(score);
    last_score = score;
  }

  delay(30);
  }
  else{
    if ( game_done  == false){
    lcd.clear();
    lcd.print("Game Over!");
    game_done = true;
    }
    return;
  }


}
 


// we check if we havea collision or not 
bool checkCollision(int targetX, int targetY){

  if (targetX < 0 || targetX > (8 - shapeWidth)){
  return true;
  }

  if (targetY <0) {
    return true;
  }

  for (int i = 0; i < shapeHeight; i++ ){
    if (targetY+ i >= 32){// if the target reading is outside the board
      continue;
    }
    

    byte shiftedRow = currentShape[i] >> targetX;
    if (shiftedRow & gameBoard[targetY + i]){
      return true;
    }
  }
  return false;
}




// Shape randomization
void spawnPiece() {
  for (int i = 0; i < 4; i++) {
    currentShape[i] = 0;
    }
  int nextShape = random(0, 5); //it will randomly choose a number between 0 to 5
 
  //  Square (2x2)
  if (nextShape == 0) {
    currentShape[0]= B11000000 ;
    currentShape[1 ] = B11000000;
    shapeHeight =  2;
    shapeWidth= 2;
  }
  // Horizontal Line (4x1)
  else if (nextShape == 1) {
    currentShape[0] = B11110000;
    shapeHeight = 1;
    shapeWidth= 4;
  }
  // vertical Line  (1x4)
  else if (nextShape == 2) {
    currentShape[0]= B10000000;
    currentShape[1] = B10000000;
    currentShape[2]= B10000000;
    currentShape[3] = B10000000;
    shapeHeight = 4;
    shapeWidth= 1;
  }
  //  L-Shape (2x3 )
  else if (nextShape == 3) {
    currentShape[0] = B11000000;
    currentShape[1]= B10000000;
    currentShape[2]= B10000000 ;
    shapeHeight = 3;
    shapeWidth =2;
  }
 
  // Inverted L-Shape ( 2x3)
  else if (nextShape == 4) {
    currentShape[0] = B11000000;
    currentShape[1]  = B01000000;
    currentShape[2] = B01000000;
    shapeHeight = 3;
    shapeWidth = 2;
  }
 
  // Reseting the coordinates base ohn the nex shape coordinates to the top
  pieceX = 3;
  pieceY =  32 - shapeHeight;

  if (checkCollision(pieceX, pieceY) == true){
    gameOver = true;
  }
 
}
 
void handleJoystick() {
  // using millis() instead of delay()
  if (millis()- lastJoyTime < 150) {
    return; // if less than 150 ms ignor the joy stick
  }

  int xval = analogRead(JOY_X);


  // moving right
  if (xval >700) {
    // check and makes sure we aren't pushing into a locked piece 
    if (checkCollision(pieceX + 1, pieceY) == false) {
      pieceX++;
      lastJoyTime= millis();

    }
  }

  // moving left
  else if (xval <300) {
    if (checkCollision(pieceX - 1, pieceY) == false) {
      pieceX--;
      lastJoyTime = millis();
    } }
}




 
void applyGravity(){
 
  if  (millis()- lastDropTime > dropSpeed){
    if (checkCollision(pieceX, pieceY-1) == true){
      lockPiece();
    }
    else{
      pieceY--;
    }
    lastDropTime = millis();
  }

 
}

void checkLines(){
  for (int row = 0; row < 32; row++){
    if (gameBoard[row] == B11111111){
      score++;
      gameBoard[row] = B00000000; 
      for(int i = row +1 ; i <32; i++){
        gameBoard[i-1] = gameBoard[i];
        gameBoard[i] = B00000000;
      }
      row--; // because the same row might be full again if the row above was full before the fall
    }
  }
}
 
void lockPiece(){
  for (int i = 0; i < shapeHeight; i++){ // we start from the lowest row and go forward
  int row = pieceY + i;
    if (row >= 0 && row < 32){
      byte shiftedRow = currentShape[i] >> pieceX;  // we move to the x position for each row to the left ancher and then shift tht current shape to that place
 
      gameBoard[row] |= shiftedRow; // we move the shape to the proper row and fix the light on for those specific lights

    }
  }
  checkLines();
  spawnPiece();
 
}


void drawFrame() {
  // Copy board
  for (int i = 0; i < 32; i++) {
    displayBoard[i] = gameBoard[i];
  }

  // Draw falling piece
  for (int i = 0; i < shapeHeight; i++) {
    int row = pieceY + i;

      if (row >= 0 && row < 32) {   
        byte shiftedRow = currentShape[i] >> pieceX;
        displayBoard[row] |= shiftedRow;
  }
  }

  // rotating the side way map to the vertical one
  for (int matrix = 0; matrix < 4; matrix++) {

    for (int row = 0; row  < 8; row++) {

      byte rowData = 0;

      for (int col = 0; col < 8; col++) {

        // swaping X and Y
        int vY =  matrix * 8 + col;   //from row to column
        int vX= row;                // from colum n to row

        bool pixel = bitRead(displayBoard[vY], vX);

        if (pixel) {
          bitWrite(rowData,  col, 1);
        }
      }

      lc.setRow(matrix, row, rowData);
    }
  }
}