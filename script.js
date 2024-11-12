// function for navbar
let navIcon = document.querySelector('#menuBar');
let navItems = document.querySelector('#navItem');
let nav = document.querySelectorAll('#navItem > li')

function toggle() {
    navItems.classList.toggle('hidden');
}

navIcon.addEventListener('click', toggle);

nav.forEach(li => {
    li.addEventListener('click', toggle);
});

