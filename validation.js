
const form = document.querySelector(".form");

const regName = /^[a-zA-Z ]{3,18}$/,
      regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      regPass = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const nameinput = document.querySelector(".nameInput"),
      emailinput = document.querySelector(".emailInput"), 
      passwordinput = document.querySelector(".passwordInput"),
      password_2_input = document.querySelector(".password2Input");

const nameError = document.querySelector(".nameErr"),
      nameAdded = document.querySelector(".nameAdd"),
      emailError = document.querySelector(".emailErr"),
      emailAdded = document.querySelector(".emailAdd"),
      passwordError = document.querySelector(".passwordErr"),
      passwordAdded = document.querySelector(".passwordAdd"),
      password_2_Error = document.querySelector(".password_2_Err"),
      password_2_Added = document.querySelector(".password_2_Add"); 


form.addEventListener("submit", (e) => {
    e.preventDefault()

    examination(regName,nameinput,nameError,nameAdded)
    examination(regEmail,emailinput,emailError,emailAdded)
    examination(regPass,passwordinput,passwordError,passwordAdded)
    examination_02(passwordinput,password_2_input,password_2_Error,password_2_Added)
});

function examination(reg, input, error, added) {
    if(!reg.test(input.value.trim())) {        
        error.innerHTML = "<div>error</div>"
        added.innerHTML = "<div></div>"
    } else {        
        added.innerHTML = "<div>confirm</div>"
        error.innerHTML = "<div></div>"
    }
};

function examination_02(password_01, password_02, error, added) {
    if(password_01.value !== password_02.value || password_02.value === ""){
        error.innerHTML = "<div>error</div>"
        added.innerHTML = "<div></div>"
    } else {        
        added.innerHTML = "<div>confirm</div>"
        error.innerHTML = "<div></div>"
    }
};