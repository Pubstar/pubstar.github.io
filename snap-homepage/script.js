let featuresText = document.querySelector('p.menu-dropdown.features');
let companyText = document.querySelector('p.menu-dropdown.company');
let exitIcon = document.querySelector('.exit-menu-icon');
let hamburgerIcon = document.querySelector('.hamburger-icon');

let featuresLi = document.querySelector('.features-li');
let companyLi = document.querySelector('.company-li');

let featuresMenu = document.querySelector('.features-menu');
let companyMenu = document.querySelector('.company-menu');

featuresLi.style.setProperty('--arrow', 'url(./images/icon-arrow-down.svg)');
companyLi.style.setProperty('--arrow', 'url(./images/icon-arrow-down.svg)');

featuresText.style.setProperty('--arrow', 'url(./images/icon-arrow-down.svg)');
companyText.style.setProperty('--arrow', 'url(./images/icon-arrow-down.svg)');

featuresLi.addEventListener('click', () => {
    if (featuresMenu.style.visibility == "visible") {
        featuresMenu.style.visibility = 'hidden';
        featuresMenu.style.opacity = 0;
        featuresLi.style.setProperty('--arrow', 'url(./images/icon-arrow-down.svg)');
        featuresMenu.classList.add('shown');
    } else {
        featuresMenu.style.visibility = 'visible';
        companyMenu.style.visibility = 'hidden';
        featuresMenu.style.opacity = 1;
        featuresLi.style.setProperty('--arrow', 'url(./images/icon-arrow-up.svg)');
        featuresMenu.classList.remove('shown');
    }
})
companyLi.addEventListener('click', () => {
    if (companyMenu.style.visibility == "visible") {
        companyMenu.style.visibility = 'hidden';
        companyMenu.style.opacity = 0;
        companyLi.style.setProperty('--arrow', 'url(./images/icon-arrow-down.svg)');
        companyMenu.classList.add('shown');
    } else {
        featuresMenu.style.visibility = 'hidden';
        companyMenu.style.visibility = 'visible';
        companyMenu.style.opacity = 1;
        companyLi.style.setProperty('--arrow', 'url(./images/icon-arrow-up.svg)');
        companyMenu.classList.remove('shown');
    }
})

featuresText.addEventListener("click", () => {
    if (document.querySelector('.nav-menu-list.features').style.display == "block") {
        document.querySelector('.nav-menu-list.features').style.display = "none"
        featuresText.style.setProperty('--arrow', 'url(./images/icon-arrow-down.svg)');
    } else {
        document.querySelector('.nav-menu-list.features').style.display = "block"
        featuresText.style.setProperty('--arrow', 'url(./images/icon-arrow-up.svg)');
    }
})

companyText.addEventListener("click", () => {
    if (document.querySelector('.nav-menu-list.company').style.display == "block") {
        document.querySelector('.nav-menu-list.company').style.display = "none"
        companyText.style.setProperty('--arrow', 'url(./images/icon-arrow-down.svg)');
    } else {
        document.querySelector('.nav-menu-list.company').style.display = "block"
        companyText.style.setProperty('--arrow', 'url(./images/icon-arrow-up.svg)');
    }
})

exitIcon.addEventListener('click', () => {
    document.querySelector('aside').style.display = 'none';
})
hamburgerIcon.addEventListener('click', () => {
    document.querySelector('aside').style.display = 'block';
})