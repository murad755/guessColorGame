let numSquares = 9;
let colors = [];
let pickedColor;

let cubes = document.querySelectorAll(".cube");
let colorDisplay = document.getElementById('rgbText');
let messageDisplay = document.getElementById("jsStatement");
let bgColor = document.querySelector(".colorSet");
let resetButton = document.getElementById("start");
let modeButtons = document.querySelectorAll(".mode");

init();

function init () {
	setupModeButtons();
	setupSquares();
	reset();
	


	function setupModeButtons () {
		for (let i = 0; i < modeButtons.length; i++) {
			modeButtons[i].addEventListener("click", function () {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 9;
			reset();
			});
		};
	}

	function setupSquares () {
		for (let i = 0; i < cubes.length; i++) {
		cubes[i].addEventListener("click", function () {
		let clickedColor = this.style.backgroundColor;

		if (clickedColor === pickedColor) {
			cubes[i].style.backgroundColor = changeColors;
			bgColor.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			messageDisplay.textContent = "Correct!"

		} 	else {
				this.style.backgroundColor = "white";
				this.style.boxShadow = "0px 0px 0px white";
				this.style.cursor = "default";
				messageDisplay.textContent = "Try Again";
			}	
		});
	};

	}

	
	reset();
};


for (let i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function () {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 9;
		reset();
	});
};


function reset () {
	colors = generateRandomColors(numSquares);
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "Let's Start!";
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (let i = 0; i < cubes.length; i++) {
		if (colors[i]) {
			cubes[i].style.display = "block";
			cubes[i].style.backgroundColor = colors[i];	
		} else {
			cubes[i].style.display = "none";
		}
		
	}
	bgColor.style.backgroundColor = "#2BBBD8";
}


resetButton.addEventListener("click", function () {
	reset();
});


function changeColors (color) {
	for (let i = 0; i < cubes.length; i++) {
		cubes[i].style.backgroundColor = color;
	};
};


function pickColor () {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors (num) {
	let arr = [];

	for (let i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	
	return arr;  
}

function randomColor () {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";		
}
