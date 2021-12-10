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

// Request 
let requestURL = "http://localhost:9999/games/"

let xhr = new XMLHttpRequest();

xhr.open("GET", requestURL);
xhr.send();

xhr.onload = () => {
	console.log(JSON.parse(xhr.response));
	bodyCreator(JSON.parse(xhr.response));
}

xhr.onerror = () => {
	return;
}

// fetch(requestURL, {methods:"GET"}).then(data => console.log(data))





const contentBody = document.getElementById('contentBody');


function bodyCreator(elems) {
	contentBody.innerHTML = '';
	for(item of elems) {
		let divBody = document.createElement('div');
		divBody.classList.add('games__body');

		let divCard = document.createElement('div');
		divCard.classList.add('games__card');

		let divImg = document.createElement('div');
		divImg.classList.add('games__img');

		let aImg = document.createElement('a');
		aImg.classList.add('games__img-link');

		let img = document.createElement('img');
		img.classList.add('games__image');

		let headLine = document.createElement('h6');
		headLine.classList.add('games__headline');

		let headLineLink = document.createElement('a');
		headLineLink.classList.add('games__headline-link');

		let descr = document.createElement('p');
		descr.classList.add('games__explanation');

		descr.textContent = item.desc;

		headLineLink.textContent = item.title;
		headLineLink.href = '#';
		headLine.append(headLineLink);

		img.src = item.img || "img/games/batman.jpg";
		aImg.href = "#";
		aImg.append(img);
		divImg.append(aImg);

		divCard.append(divImg);
		divCard.append(headLine);
		divCard.append(descr);
		divBody.append(divCard);
		contentBody.append(divBody);
	}	
}


// function sourceImg(source) {
// 	return source
// }

// function sourceHeadline(source) {

// }

// function sourceText(source) {

// }


// Fetch request 


