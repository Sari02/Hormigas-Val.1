var bg,bgImg;
var player1, player2, player3, player4; // son para los sprites
var player1Img, player2Img, player3Img, player4Img; // para contener la imagen de los monos

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var invisibleGround;



function preload(){
  
  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")

  player1Img = loadImage("assets/monorojo.png")
  player2Img = loadImage("assets/monoazul.png")
  player3Img = loadImage("assets/monomorado.png")
  player4Img = loadImage("assets/monoverde.png")
  

  bgImg = loadImage("assets/bg.png")

}

function setup() {

  
  createCanvas(1300,600);

  //agregando la imagen de fondo 
  bg = createSprite(1300/2-20,600/2,20,20)
bg.addImage(bgImg)
bg.scale = 0.5

// creando sprite de suelo
invisibleGround = createSprite(1300/2,550,1300,10);
invisibleGround.visible = true;
  

//creando el sprite del jugador rojo
player1 = createSprite(100,600-100, 50, 50);
 player1.addImage(player1Img)
   player1.scale = 0.5
   player1.debug = true
   player1.setCollider("rectangle",0,0,200,200)

   player2 = createSprite(100,600-100, 50, 50);
   player2.addImage(player2Img)
   player2.scale = 0.5
   player2.debug = true
   player2.setCollider("rectangle",0,0,200,200)

  //  player3 = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  //  player3.addImage(player3Img)
  //  player3.scale = 0.3
  //  player3.debug = true
  //  player3.setCollider("rectangle",0,0,300,300)

  //  player4 = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  //  player4.addImage(player4Img)
  //  player4.scale = 0.3
  //  player4.debug = true
  //  player4.setCollider("rectangle",0,0,300,300)

   //creando sprites para representar la vida sobrante
   heart1 = createSprite(1300-150,40,20,20)
   heart1.visible = false
    heart1.addImage("heart1",heart1Img)
    heart1.scale = 0.4

    heart2 = createSprite(1300-100,40,20,20)
    heart2.visible = false
    heart2.addImage("heart2",heart2Img)
    heart2.scale = 0.4

    heart3 = createSprite(1300-150,40,20,20)
    heart3.addImage("heart3",heart3Img)
    heart3.scale = 0.4
   


}

function draw() {
  background(0); 

  //moviendo al jugador arriba y abajo: volviéndolo compatible con juegos mobiles a traves de entrada táctil
if((keyDown("W")||touches.length>0)&& player1.y >= 100){
  //player1.y = player1.y-30
  player1.velocityY = -12;
  console.log(player1.x,player1.y);
}
if((keyDown("S")||touches.length>0)&& player1.y < 860){
 player1.y = player1.y+30
 console.log(player1.x,player1.y);
}

if(keyDown("D")&& player1.x < 1660){
  player1.x = player1.x+30
  console.log(player1.x,player1.y);
 }

 if(keyDown("A")&& player1.x > 230){
  player1.x = player1.x-30
  console.log(player1.x,player1.y);
 }


 //player2
 if((keyDown('UP_ARROW')||touches.length>0) && player1.y >= 100){
  player2.y = player2.y-30
}
if(keyDown('DOWN_ARROW')||touches.length>0){
 player2.y = player2.y+30
}

if(keyDown('RIGHT_ARROW')){
  player2.x = player2.x+30
 }

 if(keyDown('LEFT_ARROW')){
  player2.x = player2.x-30
 }

 // agregar gravedad
 player1.velocityY = player1.velocityY + 0.8
 player2.velocityY = player2.velocityY + 0.8

 // hacer que los monos no se caigan
 player1.collide(invisibleGround);

//liberar las balas y cambiar la imagen del tirador a posición de disparo cuando la barra espaciadora es presionada 
//if(keyWentDown("space")){
  
//  player.addImage(shooter_shooting)
  
 
//}

//el jugador regresa a la imagen de la posición original una vez que dejamos de presionar la barra espaciadora
//else if(keyWentUp("space")){
//  player.addImage(shooterImg)
//}





drawSprites();
}


