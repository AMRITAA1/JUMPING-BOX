var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    var block1_options={
        isStatic:true
    }
    block1 = createSprite(0,580,200,30,block1_options);
    block1.shapeColor = "blue";
    
    var block2_options={
        isStatic:true
    }
    block2 = createSprite(295,580,200,30,block2_options);
    block2.shapeColor = "orange";
    
    var block3_options={
        isStatic:true
    }
    block3=createSprite(500,580,200,30,block3_options);
    block3.shapeColor="red";
   
    var block4_options={
        isStatic:true
    }
    block4=createSprite(600,580,200,30,block4_options);
    block4.shapeColor="green";
    
    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40,ball_options);
    ball.shapeColor = rgb(255,255,255);
    var ball_options={
        restitution:2
    }
    ball.velocityY=8;
    //write code to add velocityX and velocityY
    ball.velocityX=8;

}

function draw() {
    background("yellow");
    edges=createEdgeSprites();
    if (ball.isTouching(edges)) {
        ball.bounceOff(edges);
    
    }
    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX=0;
        ball.velocityY=0;
    

        //write code to stop music
        music.stop();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play();
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
    }
    
    drawSprites();
}
