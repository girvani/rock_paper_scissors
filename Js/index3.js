// rules modal section start

// Get references to the modal, overlay, and close button
const modal = document.getElementById('myModal');
const overlay = document.getElementById('overlay');
const closeModalBtn = document.getElementById('closeModalBtn');

// Get a reference to the button that opens the modal
const openModalBtn = document.getElementById('openModalBtn');

// Function to open the modal
function openModal() {
  modal.style.display = 'block';
  overlay.style.display = 'block';
}

// Function to close the modal
function closeModal() 
{
  modal.style.display = 'none';
  overlay.style.display = 'none';
}

// Event listener to open the modal when the button is clicked
openModalBtn.addEventListener('click', openModal);

// Event listener to close the modal when the close button is clicked
closeModalBtn.addEventListener('click', closeModal);

// Event listener to close the modal when the overlay is clicked
overlay.addEventListener('click', closeModal);

// rules modal section ends
