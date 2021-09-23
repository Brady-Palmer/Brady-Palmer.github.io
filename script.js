var counter = 0;
colors = []
for (var i=0; i<=256; i+= 1) {
    color = "rgb(" + i + "," + i + "," + i + ")";
    colors.push(color);
}
for (var i=256; i>=0; i-= 1) {
    color = "rgb(" + i + "," + i + "," + i + ")";
    colors.push(color);
}
alert(colors);


function setup() {
    setInterval(changeColor, 10);
    }

function changeColor() {
    var list = document.getElementById("portfolio");
    list.style.color = colors[counter];
    
    if (counter === colors.length - 2) {
        counter = 0;
    } else {
        counter++;
    }
}