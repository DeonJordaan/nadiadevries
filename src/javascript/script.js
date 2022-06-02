// Init on DOM Load
document.addEventListener(
	'DOMContentLoaded',
	setTimeout(() => {
		navAnimation();
		scrollLabelFade();
	}, 50)
);

function navAnimation() {
	// const logo = document.querySelector('.nav__logo');
	const scrollLabel = document.querySelector('.intro__scroll-label');
	const navItems = document.querySelectorAll('.navigation__item');
	// const welcomeSection = document.querySelector('welcome-section');
	// logo.classList.add('appear');
	scrollLabel.classList.add('appear');
	navItems.forEach((item) => item.classList.add('appear'));
	// welcomeSection.classList.add('appear	');
	console.log('appear');
}
