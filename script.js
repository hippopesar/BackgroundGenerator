var body = document.getElementsByTagName("body")[0];
var clr1 = document.getElementsByName("color1")[0];
var clr2 = document.getElementsByName("color2")[0];
var h3 = document.getElementsByTagName("h3")[0];

clr1.addEventListener("input", ChangeColor);
clr2.addEventListener("input", ChangeColor);

function ChangeColor(){
    body.style.background = 
        "linear-gradient(to right, " 
        + clr1.value 
        + ", " 
        + clr2.value 
        + ")";

    h3.textContent = body.style.background + ";";
}

