$(document).ready(function(){

    $('#clients-slide').slick({
        dots: false,
        infinite: false,
        slidesToShow: 9,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 495,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }

        ]

    });


    $('#menu-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
        fade: true,
        cssEase: 'linear'

    });




});
