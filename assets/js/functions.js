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
            scrollTop: $(href).offset().top
        }, 1700, "easeInOutExpo");
    });

    backgroundSlideshow();
});
