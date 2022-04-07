const container = document.getElementById('container');
const navTogggleBtn = document.getElementById('nav-toggle');
const mobileNav = document.getElementById('mobile-nav');

navTogggleBtn.onclick = () => {
	if (navTogggleBtn.src.indexOf('open.svg') != -1) {
		navTogggleBtn.src = './images/icon-close.svg';
		mobileNav.style.display = 'flex';
		container.classList.add('display-mobile-nav');
	} else {
		navTogggleBtn.src = './images/icon-open.svg';
		mobileNav.style.display = 'none';
		container.classList.remove('display-mobile-nav');
	}
};
