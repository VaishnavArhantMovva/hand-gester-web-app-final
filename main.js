//https://teachablemachine.withgoogle.com/models/9h263uYwk/

var prediction1 = "";
var prediction2 = "";

Webcam.set({
    width : 350,
    height : 300
});

Webcam.attach("camera");
function snap(){
    Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML = "<img id = 'image' src = "+data_uri+">";
});
}

console.log("ml5 version  = ",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9h263uYwk/model.json",modelloaded);
function modelloaded(){
    console.log("modelloaded");
}

function speak(){
    var s = window.speechSynthesis;
    speak1 = "The first prediction is"+prediction1;
    speak2 = "The second prediction is"+prediction2;
    var utter = new SpeechSynthesisUtterance(speak1+speak2);
    s.speak(utter);
}


function check()
{
    img = document.getElementById("image");
    classifier.classify(img,gotResult);
    
}

function gotResult(error,results)
{
    if (error){
        console.error(error); 
    }

    else {
        console.log(results);
        document.getElementById("emotion_name").innerHTML = results[0].label;
        document.getElementById("emotion_name2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
        if (results[0].label == "best")
        {
            document.getElementById("emoji_name").innerHTML = "&#128077;";
        }

        if (results[0].label == "victory")
        {
            document.getElementById("emoji_name").innerHTML = "&#9996;"; 
        }

        if (results[0].label == "amazing")
        {
            document.getElementById("emoji_name").innerHTML = "&#128076;";   
        }
    

    if (results[1].label == "best")
        {
            document.getElementById("emoji_name2").innerHTML = "&#128077;";
        }

        if (results[1].label == "victory")
        {
            document.getElementById("emoji_name2").innerHTML = "&#9996;"; 
        }

        if (results[1].label == "amazing")
        {
            document.getElementById("emoji_name2").innerHTML = "&#128076;";
        }

    }

}
