noseX = 0;
noseY = 0;
rightwristX = 0;
leftwristX = 0;
difference = 0;
function preload()
{
}

function setup()
{
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#FF0000');
    document.getElementById("square_sides").innerHTML = "Width and height of the square will = " + difference + "px";
    text("hi", noseX, noseY);
    textSize(difference);

}

function modelLoaded()
{
    console.log("Model is loaded!")
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x value = " + noseX + "Nose y value = " + noseY);
        

        rightwristX = results[0].pose.rightWrist.x;
        leftwristX = results[0].pose.leftWrist.x;
        console.log("Right wrist x value = " + rightwristX + "Left wrist x value = " + leftwristX);
        difference = floor(leftwristX - rightwristX);
        console.log(difference);
    }
}