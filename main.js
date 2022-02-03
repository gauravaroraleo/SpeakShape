x = 0;
y = 0;
draw_rect = "";
draw_circle = "";

function setup() {
    c1 = createCanvas(800, 600)

}
var speechrec = window.webkitSpeechRecognition;
var speechnew = new speechrec()

function start() {
    document.getElementById("status").innerHTML = "Im listening please speak."
    speechnew.start()
}
speechnew.onresult = function (event) {
    console.log(event)
    var path = event.results[0][0].transcript
    document.getElementById("status").innerHTML = "I recognized the speech as: " + path
    if (path == "circle") {
        x = Math.floor(Math.random() * 800);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing a circle."
draw_circle="la"

    }
    if (path=="rectangle"){
        x = Math.floor(Math.random()*800);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing a rectangle."
        draw_rect="la"
        
    }
}
function draw(){
    if(draw_circle=="la"){
        radius=Math.floor(Math.random()*100)
        circle(x,y,radius);
        document.getElementById("status").innerHTML="Circle completed."
        draw_circle="";
        
        
    }
    if(draw_rect=="la"){
                length=Math.floor(Math.random()*120)
                breadth=Math.floor(Math.random()*120)

        rect(x,y,length,breadth);
        document.getElementById("status").innerHTML="Rectangle completed."
        draw_rect="";
        
        
    }
}