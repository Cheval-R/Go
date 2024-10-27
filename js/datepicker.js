const today = new Date();
const maxDay = new Date().setMonth(today.getMonth() + 1);

console.log(today.getMonth() + 1);
new AirDatepicker('#datepicker', {
	// selectedDates: [today],
	minDate: today,
	maxDate: (maxDay),
	timePicker: false,
	dateFormat: 'dd.MM.yy'
});