const buttons = document.querySelectorAll('.ripple')

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		//get the postion of the click wrt to the window
		const x = e.clientX
		const y = e.clientY

		//get the postion of the button wrt to window
		const buttonTop = e.target.offsetTop
		const buttonLeft = e.target.offsetLeft

		//calculate the postion of the click wrt to btn
		const xInside = x - buttonLeft
		const yInside = y - buttonTop

		//create a span with class circle and postions of top as yInside and left as xInside
		const circle = document.createElement('span')
		circle.classList.add('circle')
		circle.style.top = yInside + 'px'
		circle.style.left = xInside + 'px'
		//add the circle to the dom on the button
		button.appendChild(circle)
		//remove the circle from dom after its ripple effect is done
		setTimeout(() => circle.remove(), 500)
	})
})
