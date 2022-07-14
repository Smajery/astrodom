const swiper = new Swiper('.hello_box-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enable: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    parallax: true,
    speed: 1500,
    spaceBetween: 40,
    slidesPerView: 1,
    watchOverflow: true,
    slidesPerGroup: 1,
    centeredSlides: true,
    initialSlide: 1,
    loop: true,
    loopedSlides: 3,
});
