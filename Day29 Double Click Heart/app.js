const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

// loveMe.addEventListener('click', (e) => {
// //to check if we clicked twice in under 8 sec then we display heart
// 	if (clickTime === 0) {
// 		clickTime = new Date().getTime()
// 	} else {
// 		if (new Date().getTime() - clickTime < 8000) {
// 			createHeart(e)
// 			clickTime = 0
// 		} else {
// 			clickTime = new Date().getTime()
// 		}
// 	}
// })

loveMe.addEventListener('dblclick', (e) => {
	createHeart(e)
})

const createHeart = (e) => {
	const heart = document.createElement('i')
	heart.classList.add('fas')
	heart.classList.add('fa-heart')

	//cordinate position from the click position i.e relative to viewport
	const x = e.clientX
	const y = e.clientY

	//get the left and top offset of the target to place the heart relative to the target
	const leftOffset = e.target.offsetLeft
	const topOffset = e.target.offsetTop

	//cordinates relative to the image i.e target
	const xInside = x - leftOffset
	const yInside = y - topOffset

	//set the top and left values to the heart to position it in DOM
	heart.style.top = `${yInside}px`
	heart.style.left = `${xInside}px`

	loveMe.appendChild(heart)

	//to handle the clicks
	times.innerHTML = ++timesClicked

	//remove the heart from the Dom after 3s
	setTimeout(() => heart.remove(), 3000)
}
