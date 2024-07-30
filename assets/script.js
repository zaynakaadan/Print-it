const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//console.log(slides);


//Les variables globales
const dots = document.querySelector(".dots");
let index = 0;
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const img = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");

//Affichage des dots
function displayDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
		if (i == index) {
			dot.classList.add("dot_selected");
		}
	}
}
displayDots();

//Affichage au click Droite
function clickRight() {
	arrowRight.addEventListener("click", ()=> {
		//console.log("right");
		const arrayDots = document.querySelectorAll(".dots .dot");
		arrayDots[index].classList.remove("dot_selected");
		//console.log(arrayDots);
		index++;
		//console.log(index);
		if (index > slides.length - 1) {
			index = 0;
		}
		img.src = `./assets/images/slideshow/${slides[index].image}`;
		tagLine.innerHTML = slides[index].tagLine;
		arrayDots[index].classList.add("dot_selected")
	});
}
clickRight();


//Affichage au click Gauche
function clickleft() {
	arrowLeft.addEventListener("click", ()=> {
		//console.log("left");
		const arrayDots = document.querySelectorAll(".dots .dot");
		arrayDots[index].classList.remove("dot_selected");
		//console.log(arrayDots);
		index--;
		//console.log(index);
		if (index < 0) {
			index = slides.length -1;
		}
		img.src = `./assets/images/slideshow/${slides[index].image}`;
		tagLine.innerHTML = slides[index].tagLine;
		arrayDots[index].classList.add("dot_selected")
	});
}
clickleft();