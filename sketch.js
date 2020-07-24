var ball,database;
var localPosition;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database=firebase.database();
    var location = database.ref('ball/position');
    location.on("value",readData);


}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
    writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
    writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
    writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
       x:localPosition.x+x,
       y:localPosition.y+y,

    })
    //ball.x = ball.x + x;
   //ball.y = ball.y + y;
}

function readData(data){
    localPosition =data.val();
    ball.x = localPosition.x;
    ball.y = localPosition.y;

}
