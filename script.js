
var counter = 0;
var colors = ["purple", "blue", "green", "yellow", "orange", "red"];

function setup() {
    setInterval(changeColor, 1500);
    }

function changeColor() {
    var list_entries = ["portfolio-1", "portfolio-2", "portfolio-3"]
    var list = document.getElementById("portfolio li");
    list.style.background = colors[counter];
    
    if (counter === colors.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
}