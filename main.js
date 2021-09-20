var SpeechRecognition = window.webkitSpeechRecognition; 

var recognition = new SpeechRecognition(); 

function start() 
{ document.getElementById("textbox").innerHTML = ""; 
recognition.start();
} 
recognition.onresult = function(event) { console.log(event);

var Content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML = Content; 
console.log(Content);

 if(Content =="take my selfie") { 
console.log("taking selfie --- "); 
speak();
 }

}

 function speak(){
 
 var synth = window.speechSynthesis;

 speakdata = "taking your selfie in 5 seconds" 

 var utterthis = new SpeechSynthesisUtterance(speakdata);

 synth.speak(utterthis);

 Webcam.attach(camera);

setTimeout(function(){
snapshot();
save();
}, 5000);
} 

camera = document.getElementById("camera");

Webcam.set({
width:360,
height:250,
image_format:'jpeg',
jpegquality:90
});

function snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result"). innerHTML = '<img id="snap_shot" src="'+data_uri+'">'
});
}
    
function save(){
link = document.getElementById("link");
img = document.getElementById("snap_shot"). src;
link.href = img;
link.click();
}