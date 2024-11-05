(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
//crousel for images

if (document.querySelectorAll(".carousel").length > 0) {
    let carousels = document.querySelectorAll(".carousel");
    carousels.forEach(carousel => newCarousel(carousel));
  
    function newCarousel(carousel) {
      let carouselChildren = document.querySelector(
        `.carousel[data-carousel="${carousel.dataset.carousel}"]`
      ).children;
      let speed = carousel.dataset.speed;
      let carouselContent = document.querySelectorAll(`.carousel-content`)[
        carousel.dataset.carousel - 1
      ];
      const carouselLength = carouselContent.children.length;
      let width = window.innerWidth;
      let count = width;
      let counterIncrement = width;
      let int = setInterval(timer, speed);
  
      // initial transform
      carouselContent.style.transform = `translateX(-${width}px)`;
  
      function timer() {
        if (count >= (counterIncrement - 2) * (carouselLength - 2)) {
          count = 0;
          carouselContent.style.transform = `translateX(-${count}px)`;
        }
        count = count + counterIncrement;
        carouselContent.style.transform = `translateX(-${count}px)`;
      }
  
      function carouselClick() {
        // left click
        carouselChildren[0].addEventListener("click", function() {
          count = count - width;
          carouselContent.style.transform = `translateX(-${count - 100}px)`;
          if (count < counterIncrement) {
            count = counterIncrement * (carouselLength - 2);
            carouselContent.style.transform = `translateX(-${count - 100}px)`;
          }
        });
        // right click
        carouselChildren[1].addEventListener("click", function() {
          count = count + width;
          carouselContent.style.transform = `translateX(-${count + 100}px)`;
          if (count >= counterIncrement * (carouselLength - 1)) {
            count = counterIncrement;
            carouselContent.style.transform = `translateX(-${count + 100}px)`;
          }
        });
      }
  
      function carouselHoverEffect() {
        // left hover effect events
        carouselChildren[0].addEventListener("mouseenter", function() {
          carouselContent.style.transform = `translateX(-${count - 100}px)`;
          clearInterval(int);
        });
        carouselChildren[0].addEventListener("mouseleave", function() {
          carouselContent.style.transform = `translateX(-${count}px)`;
          int = setInterval(timer, speed);
        });
  
        // right hover effect events
        carouselChildren[1].addEventListener("mouseenter", function() {
          carouselContent.style.transform = `translateX(-${count + 100}px)`;
          clearInterval(int);
        });
        carouselChildren[1].addEventListener("mouseleave", function() {
          carouselContent.style.transform = `translateX(-${count}px)`;
          int = setInterval(timer, speed);
        });
      }
  
      carouselHoverEffect();
      carouselClick();
    }
  }
  

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);

//slider animation
