
const form = document.querySelector(".form")

const regName = /^[a-zA-Z ]{3,18}$/,
      regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      regPass = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;


const nameinput = document.querySelector(".nameInput"),
      emailinput = document.querySelector(".emailInput"), 
      passwordinput = document.querySelector(".passwordInput");


form.addEventListener("submit", (e) => {
    e.preventDefault()

    example(regName, nameinput)
    example(regEmail, emailinput)
    example(regPass, passwordinput)
})

function example(reg, input) {
    if(!reg.test(input.value)) {
        console.log("empty")
        console.log(input.value)
    } else {
        console.log("added")
        console.log(input.value)
    }
}