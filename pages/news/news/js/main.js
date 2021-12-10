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
let requestURL = "http://localhost:9999/news/"

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



const contentBody = document.getElementById('contentBody');


function bodyCreator(elems) {
	contentBody.innerHTML = '';
	for(item of elems) {
		let divBody = document.createElement('div');
		divBody.classList.add('news__body');

		let divCard = document.createElement('div');
		divCard.classList.add('news__card');

		let divImg = document.createElement('div');
		divImg.classList.add('news__img');

		let aImg = document.createElement('a');
		aImg.classList.add('news__img-link');

		let img = document.createElement('img');
		img.classList.add('news__image');

		let headLineDate = document.createElement('h6');
		headLineDate.classList.add('news__headline-date');

		let headLine = document.createElement('h6');
		headLine.classList.add('news__headline');

		let headLineLink = document.createElement('a');
		headLineLink.classList.add('news__headline-link');

		let descr = document.createElement('p');
		descr.classList.add('news__explanation');

		let moreInfoBtn = document.createElement('div');
		moreInfoBtn.classList.add('more-info');

		let moreInfoLink = document.createElement('a');
		moreInfoLink.classList.add('link');

		moreInfoLink.href = item.link || '#';
		moreInfoLink.textContent = "Read More"
		moreInfoBtn.append(moreInfoLink)

		descr.textContent = item.desc;

		headLineDate.textContent = item.date || "02 May, 2021";

		headLineLink.textContent = item.title;
		headLineLink.href = '#';
		headLine.append(headLineLink);

		img.src = item.img || "img/news/darksiders2.jpg";
		aImg.href = "#";

		aImg.append(img);
		divImg.append(aImg);

		divCard.append(divImg);
		divCard.append(headLineDate);
		divCard.append(headLine);
		divCard.append(descr);
		divCard.append(moreInfoBtn);
		divBody.append(divCard);
		contentBody.append(divBody);
	0}	
}