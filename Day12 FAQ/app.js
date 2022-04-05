const buttons = document.querySelectorAll('.faq-toggle');
const faq = document.querySelectorAll('.faq');

buttons.forEach((btn) => {
	btn.addEventListener('click', () => {
		btn.parentNode.classList.toggle('active');
	});
});
