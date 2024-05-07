const mainslide = new Swiper('.main-slide', {
    loop: true,
    speed: 2000,
    autoplay: {

        delay: 1500,
        disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

const productslide = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-product-pagination",
        clickable: true,
    },
});

// const productslide = new Swiper('.product-slide',)s