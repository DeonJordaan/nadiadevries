// Init on DOM Load
document.addEventListener(
	'DOMContentLoaded',
	setTimeout(() => {
		navAnimation();
		scrollLabelFade();
	}, 50)
);

function navAnimation() {
	const headerName = document.querySelector('.header__name');
	const headerTitle = document.querySelector('.header__title');
	const scrollLabel = document.querySelector('.intro__scroll-label');
	const navItems = document.querySelectorAll('.navigation__item');
	// const welcomeSection = document.querySelector('welcome-section');
	headerName.classList.add('appear');
	headerTitle.classList.add('appear');
	scrollLabel.classList.add('appear');
	navItems.forEach((item) => item.classList.add('appear'));
	// welcomeSection.classList.add('appear	');
}
