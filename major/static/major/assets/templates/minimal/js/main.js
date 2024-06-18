(function ($) {
  "user strict";
  // Preloader Js
  $(window).on('load', function () {
    $("[data-paroller-factor]").paroller();
    $('.preloader').fadeOut(1000);
    var img = $('.bg_img');
    img.css('background-image', function () {
      var bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });
  });
  $(document).ready(function () {
    // Nice Select
    $('.select-bar').niceSelect();
    // PoPuP 
    $('.popup').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      disableOn: 300
    });
    $("body").each(function () {
      $(this).find(".img-pop").magnificPopup({
        type: "image",
        gallery: {
          enabled: true
        }
      });
    });
    $('.client-single').on('click', function (event) {
      event.preventDefault();
      var active = $(this).hasClass('active');
      var parent = $(this).parents('.testi-wrap');
      if (!active) {
        var activeBlock = parent.find('.client-single.active');
        var currentPos = $(this).attr('data-position');
        var newPos = activeBlock.attr('data-position');
        activeBlock.removeClass('active').removeClass(newPos).addClass('inactive').addClass(currentPos);
        activeBlock.attr('data-position', currentPos);
        $(this).addClass('active').removeClass('inactive').removeClass(currentPos).addClass(newPos);
        $(this).attr('data-position', newPos);
      }
    });

    // aos js active
    new WOW().init()
    //Faq
    $('.faq-wrapper .faq-title').on('click', function (e) {
      var element = $(this).parent('.faq-item');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('.faq-content').removeClass('open');
        element.find('.faq-content').slideUp(300, "swing");
      } else {
        element.addClass('open');
        element.children('.faq-content').slideDown(300, "swing");
        element.siblings('.faq-item').children('.faq-content').slideUp(300, "swing");
        element.siblings('.faq-item').removeClass('open');
        element.siblings('.faq-item').find('.faq-title').removeClass('open');
        element.siblings('.faq-item').find('.faq-content').slideUp(300, "swing");
      }
    });
    //Menu Dropdown Icon Adding
    $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
    // drop down menu width overflow problem fix
    $('ul').parent('li').hover(function () {
      var menu = $(this).find("ul");
      var menupos = $(menu).offset();
      if (menupos.left + menu.width() > $(window).width()) {
        var newpos = -$(menu).width();
        menu.css({
          left: newpos
        });
      }
    });
    $('.menu li a').on('click', function (e) {
      var element = $(this).parent('li');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp(300, "swing");
      } else {
        element.addClass('open');
        element.children('ul').slideDown(300, "swing");
        element.siblings('li').children('ul').slideUp(300, "swing");
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp(300, "swing");
      }
    })
    // Scroll To Top 
    var scrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
      } else {
        scrollTop.addClass("active");
      }
    });
    //Click event to scroll to top
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
    // Header Sticky Here
    var prevScrollpos = window.pageYOffset;
    var scrollPosition = window.scrollY;
    if (scrollPosition >= 1) {
      $(".header").addClass('active');
    }
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        $(".header").addClass('active');
        $(".header").removeClass('inActive');
      } else {
        $(".header").removeClass('active');
        $(".header").addClass('inActive');
      }
      prevScrollpos = currentScrollPos;
      if (currentScrollPos === 0) {
        $(".header").removeClass('active');
      } 
    }//Header Bar


    $('.header-bar').on('click', function () {
      $(this).toggleClass('active');
      $('.overlay').toggleClass('active');
      $('.menu').toggleClass('active');
    })
    $('.overlay').on('click', function () {
      $('.header-bar').removeClass('active');
      $('.overlay').removeClass('active');
      $('.overlay').removeClass('activeTwo');
      $('.menu').removeClass('active');
        $('.user-area').removeClass('active');
    });
    $('.sign-up-button').on('click', function () {
      $('.sign-up-section').addClass('active');
    })
    $('.sign-in-button').on('click', function () {
      $('.sign-in-section').addClass('active');
    });
    $('.cross-button').on('click', function() {
      $('.sign-in-section').removeClass('active');
      $('.sign-up-section').removeClass('active');
    })
    $('.sign-in-button-two').on('click', function() {
      $('.sign-in-section').removeClass('active');
      $('.sign-up-section').addClass('active');
    })
    $('.sign-up-button-two').on('click', function() {
      $('.sign-in-section').addClass('active');
      $('.sign-up-section').removeClass('active');
    });


    //Tab Section
    $('.tab ul.tab-menu').addClass('active').find('> li:eq(0)').addClass('active');
    $('.tab ul.tab-menu li').on('click', function (g) {
      var tab = $(this).closest('.tab'),
        index = $(this).closest('li').index();
      tab.find('li').siblings('li').removeClass('active');
      $(this).closest('li').addClass('active');
      tab.find('.tab-area').find('div.tab-item').not('div.tab-item:eq(' + index + ')').hide(10);
      tab.find('.tab-area').find('div.tab-item:eq(' + index + ')').fadeIn(10);
      g.preventDefault();
    });
    $('.prev-but, .next-but').on('click', function() {
      $('.next-but, .prev-but').removeClass('active');
      $(this).addClass('active');
    }) 
    //Odometer
    $(".counter-item").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
            var el = document.querySelectorAll('.odometer')[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });
    $(".counter-item2").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
            var el = document.querySelectorAll('.odometer')[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });
    $('.sponsor-slider').owlCarousel({
      loop: true,
      margin: 30,
      dots: false,
      autoplay: true,
      smartSpeed: 800,
      slideBy: 1,
      responsiveClass: true,
      nav: false,
      responsive: {
        425: {
          items: 2,
        },
        576: {
            nav: false,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
        1200: {
          items: 6,
        }
      },
    });
    var owl = $('.sponsor-slider');
    owl.owlCarousel();
    $('.owl-next').on('click', function () {
      owl.trigger('next.owl.carousel');
    })
    $('.owl-prev').on('click', function () {
      owl.trigger('prev.owl.carousel');
    })
    if ($('.client-slider').length) {
      $('.client-slider').owlCarousel({
        center: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        margin: 0,
        singleItem: true,
        nav: true,
        dots: false,
        thumbs: true,
        thumbsPrerendered: true,
        navText: ["<i class='flaticon-next'></i>", "<i class='flaticon-next'></i>"
        ],
        // animateIn: 'fadeIn',
        // animateOut: 'fadeUp'
      });
    }
      $('.log-out').on('click', function() {
          $('.user-area').toggleClass('active');
          $('.overlay').toggleClass('activeTwo');
      })
      $('.remove-user').on('click', function() {
          $('.user-area').removeClass('active');
          $('.overlay').removeClass('activeTwo');
      })
    $('.search-icon').on('click', function() {
      $('.search-form').toggleClass('active')
    })
    var elem = document.getElementById("myvideo");
    var elemBtn = document.getElementById("fullScreen");
    $(elemBtn).on('click', function() {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    })
    var elemBtnTwo = document.getElementById("exitScreen");
    $(elemBtnTwo).on('click', function() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    })
  });
})(jQuery);
