const reservValidator = new JustValidate('.reserv-form');

let currentDate = new Date();

// Вычитаем один день
currentDate.setDate(currentDate.getDate() - 1);

// Получаем день, месяц и год вчерашней даты
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1; // Месяцы в JS начинаются с 0 (январь)
let year = currentDate.getFullYear();

if (day === 0) {
	// Получаем последний день предыдущего месяца
	currentDate.setDate(0); // Устанавливаем день на 0 (последний день предыдущего месяца)
	day = currentDate.getDate(); // Получаем последний день
	month = currentDate.getMonth() + 1; // Месяцы в JS начинаются с 0 (январь)
}

// Формируем строку с нужным форматом (добавляем ведущие нули при необходимости)
let todayDate = (day < 10 ? '0' + day : day) + '.' + (month < 10 ? '0' + month : month) + '.' + year;




const date = document.querySelector('#date');
const dateMask = new Inputmask('99.99.9999', { "placeholder": "дд.мм.гггг" });
dateMask.mask(date);

const timeInput = document.querySelector('#time');
const timeMask = new Inputmask('99:99', { "placeholder": "чч:мм" });
timeMask.mask(timeInput);

const telInput = document.querySelector('#tel');
const telMask = new Inputmask('+7 (999) 999-99-99', { "placeholder": "+7 (***) ***-**-**" });
telMask.mask(telInput);
const emailInput = document.querySelector('#mail');




const hallsRadioList = document.getElementsByClassName('reserv-form__halls-wrapper');
reservValidator
	.addRequiredGroup(".reserv-form__halls-wrapper", 'ВЫБЕРИТЕ ЗАЛ')
	.addField("#date", [
		{
			rule: 'required',
			errorMessage: 'Выберите дату',
		},

	])
	.addField("#time", [
		{
			rule: 'required',
			errorMessage: 'Введите время',
		},
		{
			validator(value) {
				const timeValue = timeInput.inputmask.unmaskedvalue();
				// return !!(Number(dateValue) && dateValue.length === 4);
				var parts = value.split(':');
				var hours = parseInt(parts[0], 10);
				var minutes = parseInt(parts[1], 10);

				return !!((hours >= 10 && hours <= 23) && (minutes >= 0 && minutes < 60) && timeValue.length === 4);
			}, errorMessage: 'Введите время',

		}
	])
	.addField('#date', [
		{
			rule: 'required',
			errorMessage: 'Выберите дату',
		},
		{
			plugin: JustValidatePluginDate(() => ({
				format: 'dd.MM.yyyy',
				isAfter: todayDate,
			})),
			errorMessage: "Дата некорректна",
		}
	])
	.addField('#person', [
		{
			rule: 'required',
			errorMessage: 'Введите количество человек',
		},
		{
			validator(value) {
				return !!(Number(value) && value > 0 && value < 19);
			},
			errorMessage: 'Максимум 18 человек',
		}
	])
	.addField('#name', [
		{
			rule: 'required',
			errorMessage: 'Введите имя',
		},
		{
			rule: 'minLength',
			value: 2,
			errorMessage: 'Минимум 2 символа',
		},
		{
			rule: 'maxLength',
			value: 20,
			errorMessage: 'Максимум 20 символов'
		}
	])
	.addField('#surname', [
		{
			rule: 'required',
			errorMessage: 'Введите фамилию',
		},
		{
			rule: 'minLength',
			value: 2,
			errorMessage: 'Минимум 2 символа',
		},
		{
			rule: 'maxLength',
			value: 20,
			errorMessage: 'Максимум 20 символов'
		}
	])
	.addField('#tel', [
		{
			rule: 'required',
			errorMessage: 'Введите телефон',
		},
		{
			validator(value) {
				const phone = telInput.inputmask.unmaskedvalue();
				return !!(Number(phone) && phone.length === 10);
			},
			errorMessage: 'Некорректный номер',
		},
	])
	.addField('#mail', [
		{
			rule: 'required',
			errorMessage: 'Введите email',
		},
		{
			rule: 'email',
			errorMessage: 'Некорректный email',
		}
	]
	)
	.onSuccess(event => {
		event.preventDefault(); // Prevent the default form submission
		console.log(event);
		const target = event.target;
		const formData = {
			hall: $('input[name="hall"]:checked').val(),
			console: $('input[name="console"]:checked').val(),
			boardGames: $('input[name="board-game"]:checked').map(function () {
				return $(this).val();
			}).get(),
			additional: $('input[name="additional"]:checked').map(function () {
				return $(this).val();
			}).get(),
			date: $('#date').val(),
			time: $('#time').val(),
			person: $('#person').val(),
			name: $('#name').val(),
			surname: $('#surname').val(),
			phone: $('#tel').val(),
			email: $('#mail').val()
		};

		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/posts',
			type: 'POST',
			data: formData,
			success(data) {
				console.log(data);
			},
			error() {
				console.log('err');
			}
		});
	});
