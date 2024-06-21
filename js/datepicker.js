const dateWrapper = document.querySelector('.date-wrapper');
const dateInput = document.getElementById('date');
$("#date").datepicker({
	beforeShowDay: function (date) {
		var dayOfWeek = date.getDay();
		if (dayOfWeek == 0) {
			return [false];
		} else {
			return [true];
		}
	},
	minDate: 0,
	onClose: function (dateText, inst) {
		// Дополнительные действия при скрытии datepicker
		if (date.value) {
			dateWrapper.classList.add('no-icon');
		} else {
			dateWrapper.classList.remove('no-icon');
		};
	}
});

$.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: 'Предыдущий',
	nextText: 'Следующий',
	currentText: 'Сегодня',
	monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
	monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
	dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
	dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
	dayNamesMin: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
	weekHeader: 'Не',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};

$.datepicker.setDefaults($.datepicker.regional['ru']);
