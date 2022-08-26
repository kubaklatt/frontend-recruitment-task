// QUERYSELECTORS

const openBtn = document.querySelector('.container__btn')
const bgModal = document.querySelector('.modal')
const closeBtn = document.querySelector('.modal__close')
const counterClicks = document.querySelector('.counter')
const resetBtn = document.querySelector('.modal__btn')

// // VARIABLES

let clicks = 0

// FUNCTION TO OPEN MODAL

function openModal() {
	bgModal.style.display = 'flex'
	countClicks()
}

// FUNCTION TO CLOSE MODAL

function closeModal() {
	bgModal.style.display = 'none'
}

// FUNCTION TO COUNT CLICKS

function countClicks() {
	clicks++
	const parsed = JSON.stringify(clicks)
	localStorage.setItem('clicksNumber', parsed)
	counterClicks.innerHTML = clicks

	if (clicks > 5) {
		resetBtn.style.display = 'block'
	}
}

// FUNCTION TO RESET CLICKS

function resetClicks() {
	clicks = 0
	counterClicks.innerHTML = '0'
	resetBtn.style.display = 'none'
	localStorage.setItem('clicksNumber', JSON.stringify(clicks))
	closeModal()
}

// FUNCTION TO SAVE CLICKS IN LOCAL STORAGE

function initStorage() {
	if (localStorage.getItem('clicksNumber')) {
		clicks = JSON.parse(localStorage.getItem('clicksNumber'))
	}
}

// CLOSE MODAL ON CLICK BEYONG MODAL

window.addEventListener('click', function (e) {
	if (e.target == bgModal) {
		bgModal.style.display = 'none'
	}
})

// EVENTLISTENERS

openBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
resetBtn.addEventListener('click', resetClicks)

initStorage()
