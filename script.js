var body = document.getElementsByTagName("body")[0];
var clr1 = document.getElementsByName("color1")[0];
var clr2 = document.getElementsByName("color2")[0];
var h3 = document.getElementsByTagName("h3")[0];

SetBackground(clr1.value, clr2.value);
h3.textContent = body.style.background + ";";

clr1.addEventListener("input", ColorChanged);
clr2.addEventListener("input", ColorChanged);

function ColorChanged(){
    SetBackground(clr1.value, clr2.value);
    h3.textContent = body.style.background + ";";
}

function SetBackground(c1, c2){
    body.style.background = 
        "linear-gradient(to right, " 
        + c1 
        + ", " 
        + c2 
        + ")";
}

// function ConverHextoRGB(h){
//     let hex, r, g, b;

//     hex = h.replace('#','');
//     r = parseInt(hex.substring(0,2), 16);
//     g = parseInt(hex.substring(2,4), 16);
//     b = parseInt(hex.substring(4,6), 16);

//     let rgb = 'rgba(' + r + ', ' + g + ', ' + b + ')';
//     return rgb;
// }