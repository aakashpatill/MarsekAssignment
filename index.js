(() => {
	window.addEventListener('DOMContentLoaded', () => {
		createLayout('sort');
		document.querySelector('.button_sort').addEventListener('click', () => {
			createLayout('sort');
		});
		document.querySelector('.button_shuffle').addEventListener('click', () => {
			createLayout('shuffle');
		});
	});
	
	const createLayout = (mode) => {
		let cardValues = '',
			temp = [],
			cardNumber = 0;
		const cardCount = 9;
		
		while(temp.length < cardCount){
			if(mode === 'shuffle'){
				cardNumber = (Math.floor(Math.random() * cardCount) + 1);
			}
			else{
				cardNumber = temp.length + 1
			}
			if(temp.indexOf(cardNumber) === -1 ) {
				cardValues = `${cardValues}<div class='card card_${cardNumber}'>${cardNumber}</div>`;
				temp.push(cardNumber);
			}
		}
		document.querySelector('#cards').innerHTML = cardValues;
	}
})();