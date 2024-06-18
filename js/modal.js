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
form.submit(function (event) {
	event.preventDefault();
	$.ajax({
		url: 'https://jsonplaceholder.typicode.com/posts',
		type: 'POST',
		data: $(this).serialize(),
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
	})
});

