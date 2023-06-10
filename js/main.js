let dayInput = document.getElementById('dayInput')
let monthInput = document.getElementById('monthInput')
let yearInput = document.getElementById('yearInput')

let dayOutput = document.getElementById('dayOutput')
let monthOutput = document.getElementById('monthOutput')
let yearOutput = document.getElementById('yearOutput')

const submitBtn = document.querySelector('.icon')
const date = new Date()
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function setErrorEmpty(input) {
	if (input.value == '') {
		const error = input.parentElement.classList.add('invalid')
		const errorMessage = input.parentElement.querySelector('.error')
		errorMessage.innerText = 'This field is required'
		return true
	} else {
		const error = input.parentElement.classList.remove('invalid')
		const errorMessage = input.parentElement.querySelector('.error')
		errorMessage.innerText = ''
	}
}

function redInputs() {
	yearInput.parentElement.classList.add('invalid')
	dayInput.parentElement.classList.add('invalid')
	monthInput.parentElement.classList.add('invalid')
}

function dateCheck() {
	let errorDate = false
	let currentYear = date.getFullYear()
	let currentDay = date.getDate()
	let currentMonth = 1 + date.getMonth()
	debugger
	if (yearInput.value >= currentYear) {
		if (monthInput.value > currentMonth) {
			redInputs()
			const errorMessage = yearInput.parentElement.querySelector('.error')
			errorMessage.innerText = 'Must be in the past'
			errorDate = true
		} else if (monthInput.value == currentMonth && dayInput.value >= currentDay) {
			redInputs()
			const errorMessage = yearInput.parentElement.querySelector('.error')
			errorMessage.innerText = 'Must be in the past'
			errorDate = true
		}
	}
	if (dayInput.value > months[monthInput.value - 1]) {
		redInputs()
		const errorMessage = dayInput.parentElement.querySelector('.error')
		errorMessage.innerText = 'Must be a valid date'
		errorDate = true
	} else if (dayInput.value > 31) {
		dayInput.parentElement.classList.add('invalid')
		const errorMessage = dayInput.parentElement.querySelector('.error')
		errorMessage.innerText = 'Must be a valid day'
		errorDate = true
	}
	if (monthInput.value > 12) {
		monthInput.parentElement.classList.add('invalid')
		const errorMessage = monthInput.parentElement.querySelector('.error')
		errorMessage.innerText = 'Must be a valid month'
		errorDate = true
	}
	if (yearInput.value > currentYear) {
		yearInput.parentElement.classList.add('invalid')
		const errorMessage = yearInput.parentElement.querySelector('.error')
		errorMessage.innerText = 'Must be in the past'
		errorDate = true
	}
	if (errorDate == true) {
		return true
	} else {
		return false
	}
}

function validate() {
	let wrongData = false

	if (setErrorEmpty(dayInput)) {
		wrongData = true
	}
	if (setErrorEmpty(monthInput)) {
		wrongData = true
	}
	if (setErrorEmpty(yearInput)) {
		wrongData = true
	}
	if (dateCheck()) {
		wrongData = true
	}
	if (wrongData == true) {
		return false
	} else {
		return true
	}
}

function calculate() {
	if (validate()) {
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
	} else {
		dayOutput.innerHTML = '- -'
		monthOutput.innerHTML = '- -'
		yearOutput.innerHTML = '- -'
	}
}

submitBtn.addEventListener('click', calculate)
