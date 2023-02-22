// I wanted to target the contact form on the contact page with JS
// I used the bootcamp notes and class code alongs as reference

const formElement = document.querySelector('form');

const submitButton = document.querySelector('button');

// I wanted to show the user's name in the prompt on the page
const inputElement = document.querySelector('#name');

// Using  this to evaluate if an email address has been entered in the feild 
const inputElementE = document.querySelector('#emailAddress');

const userName = inputElement.value.trim();

const userInput = inputElementE.value.trim();

// Change the submit button colour to grey so that there's a visual cue for the user to know that the form has been submitted
function handleClick(e){
  
    submitButton.style.backgroundColor = "grey";
}

submitButton.addEventListener('click',function(){

})


formElement.addEventListener('submit', function(e){

    e.preventDefault();


if (userInput !=="") {

    // Show an prompt on the page that the user will be contacted if an e-mail address is entered
  alert('Hello, we will contact you by email within 48hrs.');
}
else {
    // Prompt the user to enter the contact information if e-mail field is left empty
    alert('Please enter your contact information, so we can contact you.')

}
});

submitButton.addEventListener('click',handleClick)