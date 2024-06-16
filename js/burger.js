const burgerBtn = $('.burger-btn');
const burgerMenu = $('.burger-menu');

burgerBtn.click(function () {
	if (burgerBtn.hasClass('burger-btn--open')) {
		burgerBtn.html(`
			<svg width="42" height="42" viewBox="0 0 42 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<rect y="38.4407" width="54.3632" height="5.03363" rx="2" transform="rotate(-45 0 38.4407)" />
				<rect x="3.55957" width="54.3632" height="5.03363" rx="2" transform="rotate(45 3.55957 0)" />
			</svg>
		`);
		burgerBtn.toggleClass('burger-btn--open');
		burgerMenu.slideDown(500);
	}
	else {
		burgerBtn.html(`
			<svg width="54" height="29" viewBox="0 0 54 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<rect width="54" height="5" rx="2" />
				<rect y="12" width="54" height="5" rx="2" />
				<rect y="24" width="31" height="5" rx="2" />
			</svg>
		`);
		burgerBtn.toggleClass('burger-btn--open');
		burgerMenu.slideUp(500);
	}
});