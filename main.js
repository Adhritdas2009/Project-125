nosex=0;
nosey=0;
lwrist=0;
rwrist=0;
diff=0;

function preload(){

}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(800, 250);
    video=createCapture(VIDEO);
    video.position(100, 250);
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw(){
    image(canvas, 0, 0, canvas.width, canvas.height)
    background('white');
    textSize('diff');
    fill('orange');
    text('Hello', nosex, nosey);
}

function modelLoaded(){
    console.log('The model has been loaded');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log('The nose x position is '+ nosex+ ' and the y position is ' + nosey);
        lwrist=results[0].pose.leftWrist.x;
        rwrist=results[0].pose.rightWrist.x;
        diff=lwrist-rwrist;
    }
}