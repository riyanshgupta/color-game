var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    messageDisplay.textContent = "";
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "rgba(37, 37, 37, 0.009)";
});
hardBtn.addEventListener("click", function(){
    messageDisplay.textContent = "";
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
 
            squares[i].style.background = colors[i];

            squares[i].style.display = "block";

    }
    h1.style.backgroundColor = "rgba(37, 37, 37, 0.009)";
})
resetButton.addEventListener("click",function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent=pickedColor;
    this.textContent = "New Colors"
    messageDisplay.textContent = "";
    for (var i = 0; i< squares.length; i++){
        squares[i].style.background = colors[i];  //backgroundColor
        
    }
    h1.style.backgroundColor = "rgba(37, 37, 37, 0.009)";
})
colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++)
{
    squares[i].style.background = colors[i]; //jh

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor == pickedColor){
            messageDisplay.textContent="Correct!";
            messageDisplay.style.color="rgb(0, 255, 0)";
            resetButton.textContent="Play Again";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
            
        }
        else {
            this.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_DfuFpFFMmKuEGC9CuTBYrMn_0XN6QjGsijo9Aj9JozJvwdrCq6Kxrgb81Zvaz4_CY8U&usqp=CAU')";
            this.style.backgroundSize= "cover"; //own
            messageDisplay.textContent = "Try Again";
            messageDisplay.style.color="rgb(255, 0, 0)";
        }
    });
}



function changeColors(color){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+ r +", " + g + ", " + b + ")";
}