window.$ = window.jQuery = require('jquery');
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
Swiper.use([ Autoplay, Navigation, Pagination ]);

$(document).ready(function (){

    // Mobile menu
    $('.navigation__menu-button').on('click', function() {
        $('.navigation__mobile-menu').addClass('active');
    })
    $('.navigation__menu-close').on('click', function() {
        $('.navigation__mobile-menu').removeClass('active');
    });

    // Swiper Home
    const swiper = new Swiper('.home__swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: 'true',
        navigation: {
            nextEl: '.home__button-next',
            prevEl: '.home__button-prev',
        },
    });

    // Tabs
    $('.about__tabs .tabs__button').on('click', function () {
        $(".about__tabs .tabs__button").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__item").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");

})

