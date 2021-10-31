import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    speed: 900,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

exports.default = swiper;