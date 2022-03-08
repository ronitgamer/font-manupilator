noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;



function setup(){
video=createCapture(VIDEO);
video.size(550,500);

canvas=createCanvas(500,450);
canvas.position(560,100);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses)

}

function draw(){
background('#33FF33');
fill("blue");
text('CODING',50,400);
textSize(difference);


}

function modelLoaded(){
console.log("PoseNet ia initialised");


}

function gotPoses(results){
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX="+noseX+"noseY="+noseY);
rightWristX=results[0].pose.rightWrist.x;
leftWristX=results[0].pose.leftWrist.x;
difference=leftWristX-rightWristX;
}


}