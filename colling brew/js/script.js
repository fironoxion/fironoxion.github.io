// toggle class active
const navbarnav = document.querySelector('.navbar-nav');
// ketika menu icon diklik
document.querySelector('#menu-icon').onclick = () => {
    navbarnav.classList.toggle('active');
}

// klik di luar sidebar untuk menghilakan nav
const menu = document.querySelector('#menu-icon');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
});

