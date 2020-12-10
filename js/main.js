const nav = document.getElementById('nav-toggle');
const navmenu = document.getElementById('nav-menus');
nav.addEventListener('click', function() {
	navmenu.classList.toggle('nav-menus-open');
});