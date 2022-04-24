const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const inputText = document.getElementById('inputText')
const form = document.getElementById('form')
let text
// = 'We Love Programming!'
let idx = 1

let speed = 300 / speedEl.value

form.addEventListener('submit', (e) => {
	e.preventDefault()
	console.log(inputText.value)
	text = inputText.value
	inputText.value = ''
	inputText.style.visibility = 'hidden'
	writeText()
})

speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value))

function writeText() {
	textEl.innerText = text.slice(0, idx)
	idx++
	if (idx > text.length) {
		idx = 1
	}
	setTimeout(writeText, speed)
}
