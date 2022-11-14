const images = document.querySelectorAll('.images');
const arrowRight = document.getElementById('right');
const arrowLeft = document.getElementById('left');
const dots = document.getElementsByTagName('i');
const dotsClick = document.querySelector('.dots');


let active = 0;
let dotsCount = 2 ;


arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);
dotsClick.addEventListener('click', (e) =>{
if(e.target == dots[2]) {
removeActive()
	active = 0
	dotsCount = 2
addActive()
}

else if(e.target == dots[3]) {
removeActive()		
	active = 1
	dotsCount = 3
addActive()
}

else if(e.target == dots[4]) {
removeActive()		
	active = 2
	dotsCount = 4
addActive()
}
});


function prevSlide() {
removeActive();

if(active == 0 || dotsCount == 2){
	active = 2
	dotsCount = 4
}
else {
	active--
	dotsCount--
}

addActive();
};

function nextSlide() {
removeActive();


if(active + 1 === images.length || dotsCount + 1 === dots.length){
	active = 0
	dotsCount = 2
}
else {
	active++
	dotsCount++
	
}

addActive();
};

function removeActive() {
images[active].classList.remove('active')
dots[dotsCount].classList.replace('fa-solid', 'fa-regular')
};

function addActive() {
images[active].classList.add('active')
dots[dotsCount].classList.add('fa-solid')
};

