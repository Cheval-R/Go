const modal = $('.modal');
const recallBtn = $('.recall-button');
const form = $('.modal__form');
const title = $('.modal__title');

recallBtn.click(function () {
	modal.fadeToggle(500);
})

const close = modal.find('.modal__close');
close.click(function () {
	modal.fadeToggle(500);
});

modal.on('click', function (event) {
	if (event.target === this) {
		modal.fadeToggle(500);
	}
})


const nameInput = document.querySelector('#modal-name');
const phoneInput = document.querySelector('#modal-phone');
const phoneMask = new Inputmask('+7 (999) 999-99-99', { "placeholder": "+7 (***) ***-**-**" });
phoneMask.mask(phoneInput);

const validator = new JustValidate('.modal__form');

validator.addField('#modal-name', [
	{
		rule: 'required',
	},
	{
		rule: 'customRegexp',
		value: /^[А-ЯЁа-яё]{0,19}$/,
	},
	{
		rule: 'minLength',
		value: 2,
		errorMessage: 'Minimum 2 characters',
	},
	{
		rule: 'maxLength',
		value: 20,
		errorMessage: 'Maximum 20 characters',
	}
])
	.addField('#modal-phone', [
		{
			rule: 'required'
		},
		{
			validator(value) {
				const phone = phoneInput.inputmask.unmaskedvalue();
				console.log(phone);
				return !!(Number(phone) && phone.length === 10);
			},
			errorMessage: 'Please enter a valid phone number',
		},
	])
	.onSuccess(event => {
		event.preventDefault(); // Prevent the default form submission

		const target = event.target;
		const formData = {
			name: target.querySelector('#modal-name').value,
			phone: target.querySelector('#modal-phone').value,
		};

		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/posts',
			type: 'POST',
			data: formData,
			success(data) {
				title.text('Спасибо! Ваша заявка успешно отправлена!');
				form.slideUp(500);
				title.css('margin', '0');
			},
			error() {
				title.text('Извините. Что-то пошло не так, попробуйте позже');
				form.slideUp(500);
				title.css('margin', '0');
			}
		});
	});


