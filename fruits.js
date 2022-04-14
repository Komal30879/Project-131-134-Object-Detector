img = "";
status = "";

function preload(){
    img = loadImage("fruits.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.position(320, 245);
    object_detector = ml5.objectDetector("cocossd", model_loaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
} 

function model_loaded(){
    console.log("model_loaded");
    status = true;
    object_detector.detect(img, got_result);
}

function got_result(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(img, 0,0, 640, 420);
    fill("blue");
    text("Fruit Basket", 45, 75);
    noFill();
    stroke("blue");
    rect(30, 60, 450, 350);
}