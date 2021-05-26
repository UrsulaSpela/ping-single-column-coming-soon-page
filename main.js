//variables
form = document.querySelector('#form');
email = document.querySelector(#email);

//eventlistner

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
  })

//functions
function checkInputs(){
    const emailValue = email.value.trim();

    if(emailValue === ""){
        setErrorFor(email, "Email cannot be empty")
      } else if(isEmail(emailValue)) {
        setErrorFor(email, 'Enter valid email addres')
      }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
  
    //add error message inside small
    small.innerText = message;
  
    //add error class
    formControl.className ='error'
  }

function isEmail(email){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
  }
