line_c = "red"
line_w = 3

function preload(){
    doodleNet = ml5.imageClassifier("DoodleNet")
}

function setup(){
    canvas = createCanvas(300,250)
    canvas.center()
    background("white")
    canvas.mouseReleased(classifyCanvas)
}

function draw(){
    strokeWeight(line_w)
    stroke(line_c)
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    } 
}

function classifyCanvas(){
    console.log("I am sketch Identifier")
    doodleNet.classify(canvas,gotResult)
}

function gotResult(error,result){
    if(error){
        console.log(error)
    }

    else{
        console.log(result)
        document.getElementById("label").innerHTML = "Label -"+result[0].label;
        document.getElementById("confidence").innerHTML = "Confidence -"+(result[0].confidence*100).toFixed(2)+"%"
    }
}

