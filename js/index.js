const home = document.querySelector('#home')
const background_main = document.querySelector('#background_main')
const navbar = document.querySelector('nav')

home.style.marginTop = `${navbar.scrollHeight}px`

window.addEventListener('scroll', (e) => {
	const offset = e.target.scrollingElement.scrollTop
	const bgOffset = offset / 15
	background_main.style.transform = `translateY(${bgOffset}%)`
})

window.addEventListener('resize', (e) => {
	home.style.marginTop = `${navbar.scrollHeight}px`
})

// The carousel area
let index = 0;
let itemArray = []
let markerArray = []

const sliderItems = document.querySelectorAll('.slider_item')
sliderItems.forEach(item => {
	itemArray.push(item)
	const marker = document.createElement('div')
	marker.classList.add('slider_marker')
	document.querySelector('.markers').appendChild(marker)
})
document.querySelectorAll('.slider_marker').forEach(marker => {
	markerArray.push(marker)
})

function showNext() {
	itemArray[index].classList.toggle('testimonial_active')
	markerArray[index].classList.remove('slider_marker_active')
	index++;
	if (index >= itemArray.length) {
		index = 0;
	}
	itemArray[index].classList.toggle('testimonial_active')
	markerArray[index].classList.add('slider_marker_active')
}

setInterval(showNext, 5000)
