const swiper = new Swiper('.swiper', {
    speed: 800,
    spaceBetween: 100,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});