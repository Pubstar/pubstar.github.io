let featuresText = document.querySelector('p.menu-dropdown.features');
let companyText = document.querySelector('p.menu-dropdown.company');
let exitIcon = document.querySelector('.exit-menu-icon');
let hamburgerIcon = document.querySelector('.hamburger-icon');

let featuresLi = document.querySelector('.features-li');
let companyLi = document.querySelector('.company-li');

featuresLi.style.setProperty('--arrow', 'url(./images/icon-arrow-down.svg)');
companyLi.style.setProperty('--arrow', 'url(./images/icon-arrow-down.svg)');

featuresText.style.setProperty('--arrow', 'url(./images/icon-arrow-down.svg)');
companyText.style.setProperty('--arrow', 'url(./images/icon-arrow-down.svg)');

featuresLi.addEventListener('click', () => {
    if (document.querySelector('.features-menu').style.display == "block") {
        document.querySelector('.features-menu').style.display = 'none';
        featuresLi.style.setProperty('--arrow', 'url(./images/icon-arrow-down.svg)');
    } else {
        document.querySelector('.features-menu').style.display = 'block';
        featuresLi.style.setProperty('--arrow', 'url(./images/icon-arrow-up.svg)');
    }
})
companyLi.addEventListener('click', () => {
    if (document.querySelector('.company-menu').style.display == "block") {
        document.querySelector('.company-menu').style.display = 'none';
        companyLi.style.setProperty('--arrow', 'url(./images/icon-arrow-down.svg)');
    } else {
        document.querySelector('.company-menu').style.display = 'block';
        companyLi.style.setProperty('--arrow', 'url(./images/icon-arrow-up.svg)');
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