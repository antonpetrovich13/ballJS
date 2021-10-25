field.onclick = function (event) {

	let fieldCoords = this.getBoundingClientRect();

	let ballCoords = {
		top: event.clientY - fieldCoords.top - field.clientTop - ball.offsetHeight / 2,
		left: event.clientX - fieldCoords.left - field.clientLeft - ball.offsetWidth / 2,
	}

	if (ballCoords.top < 0) ballCoords.top = 0;

	if (ballCoords.left < 0) ballCoords.left = 0;

	if (ballCoords.top + ball.offsetHeight > field.clientHeight) {
		ballCoords.top = field.clientHeight - ball.offsetHeight;
	}

	if (ballCoords.left + ball.offsetWidth > field.clientWidth) {
		ballCoords.left = field.clientWidth - ball.offsetWidth;
	}

	ball.style.top = ballCoords.top + 'px';
	ball.style.left = ballCoords.left + 'px';
}