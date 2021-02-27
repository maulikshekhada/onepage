$(document).ready(function () {

    //wow animation
    new WOW().init();

    // preloader
    $(window).on('load', function (event) {
        $('#preloader').delay(500).fadeOut(500);
    });

    //Smooth scroll
    $("#home-page a[href^='#']").on('click', function (e) {
        var offset = 80;
        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function () {

            // when done, add hash to url
            // (default click behaviour)
            //window.location.hash = hash;
        });

    });

    //Project Slider
    $('#our-work-slider').owlCarousel({
        loop: false,
        margin: 30,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });

    //Our Team slider
    $('#our-team-slider').owlCarousel({
        loop: false,
        margin: 30,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });

    //Client review slider
    $('#happy-client-slider').owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        dots: true,
        items: 1,
    })

    //Digit counter
    $('.counter').counterUp({
        delay: 100,
        time: 1000
    });

    //Amimate header on scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.header-container').addClass('sticky animated slideInDown');
        } else {
            $('.header-container').removeClass('sticky animated slideInDown');
        }
    });

    //Mobile slider
    $('.menu-toggle').on("click", function () {
        $('.mobile-slider').toggleClass('active');
    });
      

});