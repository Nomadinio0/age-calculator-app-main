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

function validate() {
	// debugger
	const dayInputError = dayInput.value.trim()
	const monthInputError = monthInput.value.trim()
	const yearInputError = yearInput.value.trim()
	const inputs = document.querySelectorAll('.inputField')

	inputs.forEach(input => {
		if (input.value == '') {
			// const error = document.querySelector('.input_day')
			const error = input.parentElement.classList.add('invalid')
		} else {
			const error = input.parentElement.classList.remove('invalid')
		}
	})
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
