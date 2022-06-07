// Init on DOM Load
document.addEventListener(
	'DOMContentLoaded',
	setTimeout(() => {
		navAnimation();
		scrollLabelFade();
	}, 50)
);

function navAnimation() {
	const headerTitle = document.querySelector('.header__title');
	const scrollLabel = document.querySelector('.intro__scroll');
	const navItems = document.querySelectorAll('.navigation__item');

	headerTitle.classList.add('appear');
	scrollLabel.classList.add('appear');
	navItems.forEach((item) => item.classList.add('appear'));
}

// Intersection Observer to fade out scroll label
function scrollLabelFade() {
	const contentSection = document.querySelector('.content');
	const scrollLabel = document.querySelector('.intro__scroll');
	const header = document.querySelector('.header');
	const navigation = document.querySelector('.navigation');

	const observerCallback = (entries) => {
		const [entry] = entries;
		if (entry.isIntersecting) {
			scrollLabel.classList.add('shift');
			header.classList.add('minify');
			navigation.classList.add('minify');
		} else {
			scrollLabel.classList.remove('shift');
			header.classList.remove('minify');
			navigation.classList.remove('minify');
		}
	};

	const observerOptions = {
		root: null,
		threshold: 0.075,
	};

	const introObserver = new IntersectionObserver(
		observerCallback,
		observerOptions
	);

	introObserver.observe(contentSection);
}
