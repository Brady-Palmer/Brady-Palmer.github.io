var counter = 0;
var colors = ["red", "purple", "blue", "green", "yellow", "orange"];

function setup() {
    setInterval(changeColor, 1500);
    }

function changeColor() {
    var list = document.getElementById("portfolio li");
    list.style.background = colors[counter];
    
    if (counter === 5) {
        counter = 0;
    } else {
        counter++;
    }
}