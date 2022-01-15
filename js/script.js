// api
const url = 'https://tarot-yn.herokuapp.com/cards'

function getCards() {
let response = fetch(url)
    .then(response => {

      if (!response.ok) {
        console.log('Failed to fetch');
      }

      if (response.status === 404) {
        console.log('Error 404');
      }
      return response.json();
    });
}

console.log(getCards());

// modal
const modalContainer = document.getElementById('modalContainer');
const card = document.getElementById('card');
const closeButton = document.getElementById('closeButton');
const playAgain = document.getElementById('again');

// Show the modalContainer when click on card
card.onclick = function() {
    this.style.animation = '';
    setTimeout(() => {card.style.animation = "flip 1s linear";}, 500);
    setTimeout(() => {modalContainer.style.display = "block";}, 750);
    setTimeout(() => {modalContainer.style.opacity = 1;}, 1000);

  }

// Close modalContainer when click in "x"
closeButton.onclick = function() {
    modalContainer.style.opacity = 0;
    setTimeout(() => {modalContainer.style.display = 'none'}, 900);
}

playAgain.onclick = function(e){
    e.preventDefault();
    modalContainer.style.opacity = 0;
    setTimeout(() => {modalContainer.style.display = 'none'}, 900);
  }
  