song_1 = "";
song_2 = "";
 
left_wristY = 0;
left_wristX = 0;
 
right_wristY = 0;
right_wristX = 0;
 
function preload(){
    song_1 = loadSound("kill.mp3");
    song_2 = loadSound("bts-butter.mp3");
 
}
 
function setup(){
    canvas = createCanvas(600,450);
    canvas.center();
 
    video = createCapture(VIDEO);
    video.hide();
    video.size(600,450);
 
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',getposes);
   
}
 
function getposes(results){
    if (results.length>0){
        console.log(results);
        left_wristX = results[0].pose.leftWrist.x;
        left_wristY = results[0].pose.leftWrist.y;
 
        right_wristX = results[0].pose.rightWrist.x;
        right_wristY = results[0].pose.rightWrist.y;
 
        console.log("Left wrist's X coordinate is:" + left_wristX);
        console.log("Left wrist's Y coordinate is:" + left_wristY);
 
        console.log("Right wrist's X coordinate is:" + right_wristX);
        console.log("Right wrist's Y coordinate is:" + right_wristY);
 
 
    }
}
 
 
function modelLoaded(){
    console.log("Model is ready and initialised.")
}
 
function draw(){
    image(video,0,0,600,450);
 
    fill("red");
    stroke("orange");
    circle(right_wristX,right_wristY,15);
    circle(left_wristX,left_wristY,15);
   
}
 
function song_play(){
    song_1.play();
}
