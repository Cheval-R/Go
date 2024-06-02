document.addEventListener('DOMContentLoaded', function () {
	const dateInput = document.getElementById('date');
	const timeInput = document.getElementById('time');
	const dateWrapper = document.querySelector('.date-wrapper');
	const timeWrapper = document.querySelector('.time-wrapper');

	dateInput.addEventListener('input', function () {
		if (dateInput.value) {
			dateWrapper.classList.add('no-icon');
		} else {
			dateWrapper.classList.remove('no-icon');
		}
	});

	timeInput.addEventListener('input', function () {
		if (timeInput.value) {
			timeWrapper.classList.add('no-icon');
		} else {
			timeWrapper.classList.remove('no-icon');
		}
	});
});