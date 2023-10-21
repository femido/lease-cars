// Swiper on index
const swiper = new Swiper('.swiper', {
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

// Tabs on new-cars
const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function (element) {
    element.addEventListener('click', open);
});

function open(evt) {
    // Set tab color
    const tabTarget = evt.currentTarget;
    tabItem.forEach(function (element) {
        element.classList.remove('tabs__btn-item--active');
    });
    tabTarget.classList.add('tabs__btn-item--active');

    // Switch corresponding section
    const button = tabTarget.dataset.button;
    tabContent.forEach(function (element) {
        element.classList.remove('tabs__content-item--active');
    });
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

// Adaptive Menu
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');
})