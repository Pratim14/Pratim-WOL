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
function onclick(){

var question1=document.quiz.question1.value;
var question1=document.quiz.question2.value;
var question1=document.quiz.question3.value;
var correct=0;
  if(question1=="SQL"){
    correct+=50;
  }
  if(question2==2007){
    correct+=50;
  }
  if (question3=="Honda"){
    correct+=50;
  }
  var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["https://media3.giphy.com/media/xT0xezQGU5xCDJuCPe/giphy.gif", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	
