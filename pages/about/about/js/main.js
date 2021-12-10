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
