
let button = document.querySelector('.ping__button')
let inputEmail = document.querySelector('.ping__email')
let errorMessage = document.querySelector('.errorMessage')

const emailForm = /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


button.addEventListener('click', () => {

	// console.log("it works")

	let inputValue = inputEmail.value

	if (!emailForm.test(inputValue)) {
		errorMessage.classList.remove("hidden")
		inputEmail.classList.add("email--error")
	} else {
		errorMessage.classList.add("hidden")
		inputEmail.classList.remove("email--error")
	}


})




