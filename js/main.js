const toggle = document.querySelector('.toggle');
const section = document.querySelector('section');
toggle.addEventListener('click', () => {
	menuToggle(toggle);
});

function menuToggle(elem) {
	elem.classList.toggle('active');
};

function outOfBlock(target, elem) {
	if (target != elem) {
		dropdown.classList.remove('active');
	}
};


function sliderChanger() {
	const slides = document.querySelectorAll('.slide');
	let count = 1;
	function changer() {
		for (item of slides) {
			item.classList.remove('active');
		}
		slides[count].classList.add('active');
		if (count >= slides.length - 1) {
			count = 0;
			return;
		}
		count++;
	}
	setInterval(changer, 5 * 1000);
}

sliderChanger();