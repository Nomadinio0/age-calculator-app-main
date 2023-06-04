let dayInput = document.getElementById('dayInput')
let monthInput = document.getElementById('monthInput')
let yearInput = document.getElementById('yearInput')

let dayOutput = document.getElementById('dayOutput')
let monthOutput = document.getElementById('monthOutput')
let yearOutput = document.getElementById('yearOutput')

const submitBtn = document.querySelector('.icon')

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

// naprawic przeliczanie dni (np. przy luty 28 dni)

function calculate() {
	const date = new Date()
	let day = date.getDate()
	let month = 1 + date.getMonth()
	let year = date.getFullYear()

	if (dayInput.value > day) {
		// debugger
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
