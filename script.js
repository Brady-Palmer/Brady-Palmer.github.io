
var counter = 0;
var colors = ["purple", "blue", "green", "yellow", "orange", "red"];

function setup() {
    setInterval(changeColor, 1500);
    }

function changeColor() {
    //var list_entries = ["portfolio-1", "portfolio-2", "portfolio-3"]
    var list = document.getElementsByClassName("portfolio-li");
    for(var a=[], i=list.length; i;) {
        a[--i]=list[i];
    }
    a.forEach(element => element.style.background=colors[counter]);

    var link = document.getElementsByClassName("portfolio-a");
    a.forEach(element => element.style.background=colors[counter]);
    
    if (counter === colors.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
}