// modal
const url = 'https://tarot-yn.herokuapp.com/cards';
const modalContainer = document.getElementById('modalContainer');
const card = document.getElementById('card');
const closeButton = document.getElementById('closeButton');
const playAgain = document.getElementById('again');



function getCards(){

  // random number card
  const min = Math.ceil(0);
  const max = Math.floor(21);
  let cardNumber = Math.floor(Math.random() * (max - min)) + min;

  fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log(data.autores);
          document.getElementById('card-name').innerHTML = data.autores[cardNumber].card_name;
          document.getElementById('explanation').innerHTML = data.autores[cardNumber].explanation;
          document.getElementById('yes-or-no').innerHTML = data.autores[cardNumber].yes_or_no;

          const image = document.createAttribute("src");
          image.value = "data.autores[cardNumber].url";
          document.getElementById('photo').setAttributeNode(image);
          console.log(data.autores[cardNumber].url)

        })
        .catch((error) => {
          console.error(error);
        });
}


// Show the modalContainer when click on card
card.onclick = function() {
    this.style.animation = '';
    getCards();
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
  