var sliderOne = new Swiper(".swiper-container", {
    spaceBetween: 100,
    slidesPerView: 5,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    // loopAdditionalSlides: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

var sliderTwo = new Swiper(".content-container", {
    spaceBetween: 100,
    slidesPerView: 1,
    centeredSlides: true,
    // roundLengths: true,
    loop: true,
    // loopAdditionalSlides: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

// sliderOne.controller.control = sliderTwo;
// sliderTwo.controller.control = sliderOne;