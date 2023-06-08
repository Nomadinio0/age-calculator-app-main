let dayInput = document.getElementById('dayInput')
let monthInput = document.getElementById('monthInput')
let yearInput = document.getElementById('yearInput')

let dayOutput = document.getElementById('dayOutput')
let monthOutput = document.getElementById('monthOutput')
let yearOutput = document.getElementById('yearOutput')

const submitBtn = document.querySelector('.icon')

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

// const setError = (element, message) => {
// DO ZROBIENIA
// }

const setErrorEmpty = () => {}

function validate() {
	// debugger
	const inputs = document.querySelectorAll('.inputField')

	inputs.forEach(input => {
		if (input.value == '') {
			const error = input.parentElement.classList.add('invalid')
			const errorMessage = input.parentElement.querySelector('.error')
			errorMessage.innerText = 'This field is required'
		} else {
			const error = input.parentElement.classList.remove('invalid')
			const errorMessage = input.parentElement.querySelector('.error')
			errorMessage.innerText = ''
		}
	})

	if (dayInput.value > months[monthInput.value - 1]) {
		const error = dayInput.parentElement.classList.add('invalid')
		const errorMessage = dayInput.parentElement.querySelector('.error')
		errorMessage.innerText = 'Must be a valid day'
	}
}

function calculate() {
	validate()
	const date = new Date()
	let day = date.getDate()
	let month = 1 + date.getMonth()
	let year = date.getFullYear()

	if (dayInput.value > day) {
		dayTemp = months[monthInput.value - 1] - dayInput.value
		day = day + dayTemp
		month = month - 1
	} else {
		day = day - dayInput.value
	}
	if (monthInput.value > month) {
		month = month + 12
		year = year - 1
	}

	dayOutput.innerHTML = day
	monthOutput.innerHTML = month - monthInput.value
	yearOutput.innerHTML = year - yearInput.value
}

submitBtn.addEventListener('click', calculate)
