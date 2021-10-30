var swiper = new Swiper('.blog-slider', {
    spaceBetween: 40,
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

