import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
    invert: false,
    },
    autoHeight: true,
    pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
    }
});

exports.default = swiper;
