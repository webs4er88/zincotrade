var swiper =  new Swiper(".mainslider", {
    slidesPerView: 1,
    loop: true,
    speed: 500,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper =  new Swiper(".carousel", {
    // autoplay: {
    //     delay: 6000,
    //     disableOnInteraction: false,
    // },
    slidesPerView: 1,
    loop: true, 
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
var swiper =  new Swiper(".carousel-2", {
    // autoplay: {
    //     delay: 6000,
    //     disableOnInteraction: false,
    // },
    slidesPerView: 1,   
    loop: true,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});
var swiper =  new Swiper(".carousel-3", {
    // autoplay: {
    //     delay: 6000,
    //     disableOnInteraction: false,
    // },
    slidesPerView: 3,   
    loop: true,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
});
    // slider vertical
var swiper =  new Swiper(".slider-vertical", {
    direction: 'vertical',
    spaceBetween: 25,
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        clickable: true,
        el: ".swiper-pagination",
    },

});