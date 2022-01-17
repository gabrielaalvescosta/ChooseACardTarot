// modal
const url = 'https://tarot-yn.herokuapp.com/cards';
const modalContainer = document.getElementById('modalContainer');
let card = document.getElementsByClassName('main__tarot-card');
const closeButton = document.getElementById('closeButton');
const playAgain = document.getElementById('again');

// random number card

  const min = Math.ceil(0);
  const max = Math.floor(21);
  let random = Math.floor(Math.random() * (max - min)) + min;
  let cardNumber = random;


async function getCards(cardNumber) {

      const res = await fetch(url);
      const dados = await res.json();

      document.getElementById('card-name').innerHTML = dados.cartas[cardNumber].card_name;
      document.getElementById('explanation').innerHTML = dados.cartas[cardNumber].explanation;
      document.getElementById('yes-or-no').innerHTML = dados.cartas[cardNumber].yes_or_no;

      const image = document.createAttribute('src');
      image.value = dados.cartas[cardNumber].url;
      document.getElementById('photo').setAttributeNode(image);

      return dados;
}

// Show the modalContainer when click on card
for (let i = 0; i < card.length; i++) {
    
      card[i].onclick = async function () {

            this.style.animation = '';
            const dados = await getCards(cardNumber);

            setTimeout(() => {
              card[i].style.filter = 'grayscale(100%)';
              card[i].style.animation = 'flip 1s linear';
            }, 10);

            setTimeout(() => {
              modalContainer.style.display = 'block'
              this.style.backgroundImage = `url('${dados.cartas[cardNumber].url}')`;
            }, 100);
            setTimeout(() => {
              modalContainer.style.opacity = 1;
            }, 200);
      }
}

// Close modalContainer when click in "x"
closeButton.onclick = function () {
      modalContainer.style.opacity = 0;
      setTimeout(() => {modalContainer.style.display = 'none';
      }, 400);
}



// play again button
playAgain.onclick = function (e) {
      e.stopPropagation();

      let newRandom = Math.floor(Math.random() * (max - min)) + min;
      cardNumber = newRandom;
      getCards(cardNumber);

      modalContainer.style.opacity = 0;
      const backgroundCard = 'url(https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/assets/card.png)';
      let cardClose = document.getElementsByClassName('main__tarot-card');

  for (let j = 0; j < cardClose.length; j++) {

      cardClose[j].style.filter = 'grayscale(0%)';
      cardClose[j].style.backgroundImage = backgroundCard;
      cardClose[j].style.animation = 'flip 1s linear';
  }

      setTimeout(() => {modalContainer.style.display = 'none'}, 250)
}
