img="";
function preload(){
    img=loadImage("bedroom.jpg")
}
function setup(){
    canvas=createCanvas(540,500);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',model_loaded);
    
}
function model_loaded(){
    console.log("model_loaded")
    document.getElementById("status").innerHTML="status:detecting objects";
    objectDetector.detect(img,got_result)

}

function got_result(error,results){
    if(error){
        console.log("error");
    }
    else {
console.log(results)
    }
}
function draw(){
    image(img,0,0,540,500);
    fill("#FF0000");
    noFill();
    stroke("#FF0000");
    text("BED",150,200)
    rect(130,170,350,300);
    
    
}
function back(){
    window.location="index.html";
}