picture="";
function preload(){
    picture=loadImage("desk.jpg")
}
function setup(){
    canvas=createCanvas(580,480);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',model_loaded)
    
}
function model_loaded(){
    console.log("model_loaded")
    document.getElementById("status3").innerHTML=" status:detecting objects";
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
    image(picture,0,0,580,480);
    fill("#FF0000");
    noFill();
    stroke("#FF0000");
    text("DESK",90,100)
    rect(90,70,400,300);
    
    
}
function back3(){
    window.location="index.html";
}