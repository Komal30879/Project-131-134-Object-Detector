img = "";
status = "";
array = [];

function preload(){
    img = loadImage("tv.jpg");
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
    array = results;
}

function draw(){
    image(img, 0, 0, 640, 420);

    if(status != ""){
        
        for(i=0; i<array.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            document.getElementById("no_of_objects").innerHTML = "No. of objects detected are: " + array.length;

            fill("#FF0000");
            percent = floor(objects[i].confidence *100);
            text(array[i].label+" "+ percent + "%", array[i].x + 15, array[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(array[i].x, array[i].y, array[i].width, array[i].height);
        }
    }
}