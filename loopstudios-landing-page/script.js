const burgerIcon = document.querySelector('.burger-icon');
const closeIcon = document.querySelector('.close-icon');

const navMenu = document.querySelector('.nav-menu');

window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) {
        document.querySelector('.creations-wrapper').appendChild(document.querySelector('.see-all'))
    } else {
        document.querySelector('.creations-gallery').appendChild(document.querySelector('.see-all'))
    }
}, true);

burgerIcon.addEventListener('click', () => {
    navMenu.style.visibility = 'visible';
    navMenu.style.opacity = 1;
    navMenu.classList.add('opened');
    document.querySelector('body').classList.add('no-scroll');
})
closeIcon.addEventListener('click', () => {
    navMenu.style.visibility = 'hidden';
    navMenu.style.opacity = 0;
    navMenu.classList.remove('opened');
    document.querySelector('body').classList.remove('no-scroll');
})

if (window.innerWidth > 1000) {
    document.querySelector('.creations-wrapper').appendChild(document.querySelector('.see-all'))
} else {
    document.querySelector('.creations-gallery').appendChild(document.querySelector('.see-all'))
}
