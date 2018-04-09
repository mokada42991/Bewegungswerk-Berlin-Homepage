$(document).ready(function() {
    // Fade in logo on load
    $(".logo svg").delay(1000).fadeIn(3000);

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
            $(".kontakt-facebook-link").attr("href", "fb://profile/457541911052222");
            $(".news-facebook-link").attr("href", "fb://profile/457541911052222");
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
    // Hero arrow scroll animation
    $(".hero-arrow, .arrow-border").on("click", function() {
        $("html, body").animate({
            scrollTop: $("#welcome").offset().top - 20
        }, 1200, "easeInOutExpo");
    });
    // Termin button scroll animation
    $(".termin-button").on("click", function() {
        $("html, body").animate({
            scrollTop: $("#kontakt").offset().top - 20
        }, 1700, "easeInOutExpo");
    });
    // Scroll to map animation
    $(".kontakt-address").on("click", function() {
        $("html, body").animate({
            scrollTop: $("#map").offset().top - 70
        }, 1700, "easeInOutExpo");
    });

    // Therapie slideshow
    var slideIndex = 0;
    function showSlide(n) {
        var slides = document.getElementsByClassName("therapien-slide");
        var therapienList = document.getElementsByClassName("therapien-list-div");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (var i = 0; i < therapienList.length; i++) {
            therapienList[i].className = therapienList[i].className.replace("active", "");
        }
        slides[slideIndex].style.display = "flex";
        therapienList[slideIndex].className += " active";
    }
    showSlide(slideIndex);

    // Onclick function to show each therapie in the list
    $(".therapien-list-div").on("click", function() {
        var therapienList = document.getElementsByClassName("therapien-list-div");
        var therapieName = this.innerHTML;
        for (var i = 0; i < therapienList.length; i++) {
            if (therapieName == therapienList[i].innerHTML) {
                slideIndex = i;
            }
        }
        showSlide(slideIndex);
        //$("html, body").animate({
            //scrollTop: $(".therapien-slideshow").offset().top - 50
        //}, 1200, "easeInOutExpo");
    });

    $(".nextSlide").on("click", function() {
        if (slideIndex < 11) {
            slideIndex += 1;
            showSlide(slideIndex);
        } else {
            slideIndex = 0;
            showSlide(slideIndex);
        }
    });
    $(".prevSlide").on("click", function() {
        if (slideIndex > 0) {
            slideIndex -= 1;
            showSlide(slideIndex);
        } else {
            slideIndex = 11;
            showSlide(slideIndex);
        }
    });

    //var slideIndex = 1;
    //showSlide(slideIndex);

    //function slideScroll(n) {
        //showSlide(slideIndex += n);
    //}

    //function currentSlide(n) {
        //showSlide(slideIndex = n);
    //}

    //function showSlide(n) {
        //var i;
        //var slides = document.getElementsByClassName("therapien-slide");
        //var listTabs = document.getElementsByClassName("therapien-list-div");
        //if (n > slides.length) { slideIndex = 1 }

    //}

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

    // Form send verification
    $(".kontakt-form-text input").on("click", function() {
        var form = $(".kontakt-formular form")
        var name = $(".kontakt-form-info-name").val();
        var email = $(".kontakt-form-info-email").val();
        var tel = $(".kontakt-form-info-tel").val();
        var message = $(".kontakt-form-text textarea").val();
        if (name && email && message) {
            console.log("success");
            //form.submit();
        } else if (name && tel && message) {
            console.log("success");
            //form.submit();
        } else {
            alert("Bitte das Formular vollständig ausfüllen.");
        }
    });

    // Show and hide impressum
    $(".show-impressum").on("click", function() {
        $(".impressum").fadeIn("slow");
        $(".impressum").css("display", "block");
        $("html, body").animate({
            scrollTop: $(".impressum").offset().top - 20
        }, 1700);
    });
    $(".close-impressum").on("click", function() {
        $(".impressum").fadeOut("slow");
    });

    detectMobile();
    backgroundSlideshow();
});
