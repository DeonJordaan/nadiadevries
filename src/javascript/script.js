// Init on DOM Load
document.addEventListener(
	'DOMContentLoaded',
	setTimeout(() => {
		navAnimation();
		scrollLabelFade();
	}, 50)
);

function navAnimation() {
	// const headerName = document.querySelector('.header__name');
	const headerTitle = document.querySelector('.header__title');
	const scrollLabel = document.querySelector('.intro__scroll');
	const navItems = document.querySelectorAll('.navigation__item');
	// const welcomeSection = document.querySelector('welcome-section');
	// headerName.classList.add('appear');
	headerTitle.classList.add('appear');
	scrollLabel.classList.add('appear');
	navItems.forEach((item) => item.classList.add('appear'));
	// welcomeSection.classList.add('appear	');
}

// Intersection Observer to fade out scroll label
function scrollLabelFade() {
	const headerSection = document.querySelector('.header__name');
	const scrollLabel = document.querySelectorAll('.intro__scroll');

	const observerCallback = (entries) => {
		const [entry] = entries;
		if (!entry.isIntersecting) {
			scrollLabel.forEach((item) => item.classList.add('fade'));
		} else {
			scrollLabel.forEach((item) => item.classList.remove('fade'));
		}
		// if (!entry.isIntersecting) scrollLabel.classList.remove('appear');
		// else scrollLabel.classList.add('appear');
	};

	const observerOptions = {
		root: null,
		threshold: 0,
	};

	const headerObserver = new IntersectionObserver(
		observerCallback,
		observerOptions
	);

	headerObserver.observe(headerSection);
}
