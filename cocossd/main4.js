photo="";
function preload(){
    photo=loadImage("bottles.jpg")
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',model_loaded)
    
}
function model_loaded(){
    console.log("model_loaded")
    document.getElementById("status4").innerHTML=" status:detecting objects";
    objectDetector.detect(img,got_result)

}

function got_result(error,results){
    if(error){
        console.log("error");
    }
    else{
console.log(results)
    }
}

function draw(){
    image(photo,0,0,600,520);
    fill("#FF0000");
    noFill();
    stroke("#FF0000");
    text("BOTTLES",30,50)
    rect(15,30,600,400);
    
    
}
function back4(){
    window.location="index.html";
}