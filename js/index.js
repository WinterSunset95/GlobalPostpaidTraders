const home = document.querySelector('#home')
const background_main = document.querySelector('#background_main')

window.addEventListener('scroll', (e) => {
	const offset = e.target.scrollingElement.scrollTop
	const bgOffset = offset / 10
	background_main.style.transform = `translateY(-${bgOffset}px)`
})
