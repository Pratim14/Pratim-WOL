// addEventListener.onclick("#submit-btn")
// {
//   console.log("You are In")
// }

// Get an HTML element in JavaScript code
const signup = document.querySelector(".signup");
const signupModal = document.querySelector(".signup-modal-wrapper");
const closeButton = document.querySelector(".close-modal");
const submit      = document.querySelector("#submit-btn")
const user        = document.querySelector(".Full Name")

// function which shows the modal by changing the style of signupModal to "block"
const showModal = () => {
  signupModal.style.display = "block";
};

// function which hides the modal by changing the style of signupModal to "none"
const closeModal = () => {
  signupModal.style.display = "none";
};

// Call the showModal function when signup button is clicked
signup.addEventListener("click", () => {
  showModal();
});
submit.addEventListener("click", () => {
  alert("You are IN");
});
submit.addEventListener("click", () => {
  console.log(user)
});


// Call the closeModal function when close button on the modal is clicked
closeButton.addEventListener("click", () => {
  closeModal();
});

// Call the closeModal function when anywhere outside of the modal is clicked
window.addEventListener("click", () => {
  if (event.target === modal) {
    closeModal();
  }
});