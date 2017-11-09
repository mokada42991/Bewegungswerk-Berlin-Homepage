$(document).ready(function() {
    // Detect if user is on mobile and change the facebook link to the appropriate version.
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

    // Hero background slideshow
    var currentPhoto = 0;
    $('.background').eq(currentPhoto).addClass('current-photo').css('display','block');
    function backgroundSlideshow() {
        looper = setInterval(function() {
            $('.current-photo').removeClass('current-photo').stop().fadeTo(2000, 0);
            if (currentPhoto == 2) currentPhoto = 0;
            else currentPhoto++;
            $('.background').eq(currentPhoto).addClass('current-photo').css('display','none').stop().fadeTo(2000, 1);
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
    // Termin button scroll animation
    $(".termin-button").on("click", function() {
        $("html, body").animate({
            scrollTop: $("#kontakt").offset().top - 20
        }, 1700, "easeInOutExpo");
    });

    $(".kontakt-address").on("click", function() {
        $("html, body").animate({
            scrollTop: $("#map").offset().top - 20
        }, 1700, "easeInOutExpo");
    });


    // Show and hide therapie info
    $(".open-info").on("click", function() {
        $(this).next().fadeIn("slow");
        $(this).next().css("display", "flex");
    });
    $(".close-info").on("click", function() {
        $(this).parent().fadeOut("slow");
    });

    // Change the opacity of the partner logo on hover
    $("#partner .partner-row .partner-list-container .partner-list .partner a").hover(
        function() {
            $(this).prev().css("opacity", "0.4")
        }, function() {
            $(this).prev().css("opacity", "0.2")
        }
    );

    detectMobile();
    backgroundSlideshow();
});
