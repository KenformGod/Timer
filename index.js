const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('button')
const timerEl = document.querySelector('span')

function formatTime(seconds) {
	const hours = Math.floor(seconds / 3600)
	const minutes = Math.floor((seconds % 3600) / 60)
	const secondsFormatted = seconds % 60
	return `Hours: ${hours} Minutes: ${minutes} Seconds: ${secondsFormatted}`
}

const createTimerAnimator = (durationInSeconds)=> {
	let remainingTime = durationInSeconds
	function updateTimer() {
		timerEl.textContent = formatTime(remainingTime)
		remainingTime--
		if (remainingTime < 0) {
			clearInterval(intervalId)
			timerEl.textContent = '00:00:00'
			alert('Время вышло')
		}
	}
	updateTimer()
	const intervalId = setInterval(updateTimer, 1000)
}


inputEl.addEventListener('input', () => {
	inputEl.value = inputEl.value.replace(/\D/g, '')
})
buttonEl.addEventListener('click', () => {
	const seconds = Number(inputEl.value)

	if (!isNaN(seconds)) {
		createTimerAnimator(seconds)
	} else {
		alert('Ошибка: Введите корректное число секунд.')
	}
	inputEl.value = ''
})
