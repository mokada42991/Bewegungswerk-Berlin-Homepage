$(document).ready(function() {
    // Hero background slideshow
    var currentPhoto = 0;

    $('.background').eq(currentPhoto).addClass('current-photo').css('display','block');

    function backgroundSlideshow() {
        looper = setInterval(function() {
            $('.current-photo').removeClass('current-photo').fadeOut(2000, 'easeInOutQuad');
            if (currentPhoto == 2) currentPhoto = 0;
            else currentPhoto++;
            $('.background').eq(currentPhoto).addClass('current-photo').css('display','none').fadeIn(2000, 'easeInOutQuad');
        }, 6000);
    }

    // Navbar scroll animation
    $("nav a").on("click", function() {
        var href = $(this).attr('href');
        $("html, body").animate({
            scrollTop: $(href).offset().top - 20
        }, 1700, "easeInOutExpo");
    });
    // Back to top scroll animation
    $(".header-logo").on("click", function() {
        $("html, body").animate({
            scrollTop: $(".hero").offset().top
        }, 1700, "easeInOutExpo");
    });

    // Detect if user is on mobile and change href of facebook link to open in the mobile app.
    function detectMobile() {
        if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ) {
            $(".facebook-link").attr("href", "fb://profile/457541911052222");
        }
    };

    detectMobile();
    //backgroundSlideshow();
});
