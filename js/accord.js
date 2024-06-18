$(function () {
	$(".faq__list").accordion({
		collapsible: true,
		active: true,
		heightStyle: "content",
		icons: {
			header: 'accord-icon',
			activeHeader: 'accord-icon accord-icon--open',
		}
	});
});