const reservValidator = new JustValidate('.reserv-form');

const hallsRadioList = document.getElementsByClassName('reserv-form__halls-wrapper');
reservValidator
	.addRequiredGroup(".reserv-form__halls-wrapper",'ВЫБЕРИТЕ ЗАЛ')
	