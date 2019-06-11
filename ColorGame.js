var numSquares=6;
var colors=[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.getElementById("messageDisplay");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeBtns=document.querySelectorAll(".mode");


init();

function init(){
	setupModeBtns();
	setupSquares();
	reset();
}

function setupModeBtns(){
		for (var i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener("click",function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			(this.textContent==="Easy")?numSquares=3:numSquares=6;
			reset();
		});
	}

}

function setupSquares(){
	for(var i=0; i < squares.length; i++)
	{	
		squares[i].addEventListener("click",function(){
			var clickedColor=this.style.backgroundColor;
			if(clickedColor===pickedColor)
			{
				messageDisplay.textContent="Correct!!";
				colorChange(clickedColor);
				h1.style.backgroundColor=pickedColor;
				resetButton.textContent="Play Again";
			}
			else{
				messageDisplay.textContent="Try Again!!";
				this.style.backgroundColor="#232323";
			}
		});
	}

}
function reset(){
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
		
	}
	h1.style.backgroundColor="steelblue";
	resetButton.textContent="New Colors";

}


resetButton.addEventListener("click",function(){
	reset();
});




function colorChange(color)
{
	for(var i=0; i < squares.length; i++)
		{
			squares[i].style.backgroundColor=color;
		}
}


function pickColor()
{
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	//create an empty arr
	var arr=[];
	for ( var i=0; i<num; i++){
		//get a random color and push into arr
		var color=randomColor();
		arr.push(color);
	}
	return arr;
}

function randomColor(){
	//get a red between 0 - 255
	var r=Math.floor(Math.random() * 256);
	//get a green between 0 - 255
	var g=Math.floor(Math.random() * 256);
	//get a blue between 0 - 255
	var b=Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";

}