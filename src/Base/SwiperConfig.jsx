// todo: do not use this in leaf projects. Simply merge what developer gives us with the default config

const SwiperConfig = {
    loop: false,
    hashNavigation: {
        watchState: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    slidesPerView: 1,
    spaceBetween: 10,
}

export default SwiperConfig
