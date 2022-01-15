const modalContainer = document.getElementById('modalContainer');
const card = document.getElementById('card');
const closeButton = document.getElementById('closeButton');
const playAgain = document.getElementById('again');

// Show the modalContainer when click on card
card.onclick = function() {
    card.style.animation = "flip 1s linear";
    setTimeout(() => {modalContainer.style.display = "block";}, 750);
    setTimeout(() => {modalContainer.style.opacity = 1;}, 1000);

  }

// Close modalContainer when click in "x"
closeButton.onclick = function() {
    modalContainer.style.opacity = 0;
    setTimeout(() => {modalContainer.style.display = 'none'}, 900);
}

playAgain.onclick = function(e){
    e.stopPropagation();
    modalContainer.style.opacity = 0;
    setTimeout(() => {modalContainer.style.display = 'none'}, 900);
  }
  