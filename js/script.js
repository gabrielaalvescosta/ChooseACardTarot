const modal = document.getElementById('modal');
const card = document.getElementById('card');
const closeButton = document.getElementById('closeButton');

// Show the modal when click on card
card.onclick = function() {
    card.style.animation = "flip 1s linear";
    setTimeout(() => {modal.style.display = "block";}, 1200);

  }

// Close modal when click in "x"
closeButton.onclick = function() {
    modal.style.display = "none";
    card.removeEventListener('click', card);
  }

