var img="";
status1="";
objects= [];


function setup(){
canvas=createCanvas(600,400);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting objects";


}

function preload(){
img=loadImage("dog_cat.jpg");

}

function draw(){
image(img,0,0,600,400);
if(status1 !=""){
    for(i=0 ;i<objects.length;i++){
        document.getElementById("status").innerHTML="status: objectsdetected";
        fill("#11031a");
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
        noFill();
        stroke("#3b065c");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }

}



}

function modelLoaded(){
    console.log("Modelloaded");
   var status=true;
 objectDetector.detect(img,gotResult);
}

function gotResult(error,result){
if(error){
    console.log(error);
    }
    console.log(result);
objects=result;

}