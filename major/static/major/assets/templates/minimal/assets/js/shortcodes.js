/**
  * flatSpacer
  * Parallax
  * flatContentBox
  * flatCounter
  * flatIsotopeCase
  * flatAccordion
  * swClick
  * goTop
  * toggleMenu
  * topSearch
  * flatProgressBar
  * popUpLightBox
  * donatProgress
  * Preloader
*/

; (function ($) {

    "use strict";

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var flatSpacer = function () {
        $(window).on('load resize', function () {
            var mode = 'desktop';
            if (matchMedia('only screen and (max-width: 991px)').matches)
                mode = 'mobile';
            if (matchMedia('only screen and (max-width: 767px)').matches)
                mode = 'smobile';
            $('.themesflat-spacer').each(function () {
                if (mode === 'desktop') {
                    $(this).attr('style', 'height:' + $(this).data('desktop') + 'px')
                } else if (mode == 'mobile') {
                    $(this).attr('style', 'height:' + $(this).data('mobile') + 'px')
                } else {
                    $(this).attr('style', 'height:' + $(this).data('smobile') + 'px')
                }
            });
        });
    };

    var Parallax = function () {
        if ($().parallax && isMobile.any() == null) {
            $('.parallax');
        }
    };

    var flatContentBox = function () {
        $(window).on('load resize', function () {
            var mode = 'desktop';
            if (matchMedia('only screen and (max-width: 1199px)').matches)
                mode = "mobile";
            $('.themesflat-content-box').each(function () {
                var margin = $(this).data('margin');
                if (margin) {
                    if (mode === 'desktop') {
                        $(this).attr('style', 'margin:' + $(this).data('margin'))
                    } else if (mode === 'mobile') {
                        $(this).attr('style', 'margin:' + $(this).data('mobilemargin'))
                    }
                }
            });
        });
    };

    var flatCounter = function () {
        if ($(document.body).hasClass('counter-scroll')) {
            var a = 0;
            $(window).scroll(function () {
                var oTop = $('.tf-counter').offset().top - window.innerHeight;
                if (a === 0 && $(window).scrollTop() > oTop) {
                    if ($().countTo) {
                        $('.tf-counter').find('.number').each(function () {
                            var to = $(this).data('to'),
                                speed = $(this).data('speed');

                            $(this).countTo({
                                to: to,
                                speed: speed
                            });
                        });
                    }
                    a = 1;
                }
            });
        }
    };

    var flatIsotopeCase = function () {
        $(".box-gallery").each(function () {
            if ($().isotope) {
                var $container = $('.isotope-gl');
                $('.flat-filter-isotope li').on('click', function () {
                    var selector = $(this).find("a").attr('data-filter');
                    $('.flat-filter-isotope li').removeClass('active');
                    $(this).addClass('active');
                    $container.isotope({ filter: selector });
                    return false;
                });
            };
        });
    };

    var flatAccordion = function () {
        var args = { duration: 600 };
        $('.flat-toggle .toggle-title.active').siblings('.toggle-content').show();
        $('.flat-toggle.enable .toggle-title').on('click', function () {
            $(this).closest('.flat-toggle').find('.toggle-content').slideToggle(args);
            $(this).toggleClass('active');
        });
        $('.flat-accordion .toggle-title').on('click', function () {
            if (!$(this).is('.active')) {
                $(this).closest('.flat-accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            } else {
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            }
        });
    };

    var swClick = function () {
        function activeLayout() {
            $(".switcher-container").on("click", "a.sw-light", function () {
                $(this).toggleClass("active");
                $('body').addClass('home-boxed');
                $('body').css({ 'background': '#f6f6f6' });
                $('.sw-pattern.pattern').css({ "top": "100%", "opacity": 1, "z-index": "10" });
            }).on("click", "a.sw-dark", function () {
                $('.sw-pattern.pattern').css({ "top": "98%", "opacity": 0, "z-index": "-1" });
                $(this).removeClass('active').addClass('active');
                $('body').removeClass('home-boxed');
                $('body').css({ 'background': '#fff' });
                return false;
            })
        }

        function activePattern() {
            $('.sw-pattern').on('click', function () {
                $('.sw-pattern.pattern a').removeClass('current');
                $(this).addClass('current');
                $('body').css({ 'background': 'url("' + $(this).data('image') + '")', 'background-size': '30px 30px', 'background-repeat': 'repeat' });
                return false
            })
        }

        activeLayout();
        activePattern();
    };

    var goTop = function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('#scroll-top').addClass('show');
            } else {
                $('#scroll-top').removeClass('show');
            }
        });

        $('#scroll-top').on('click', function () {
            $("html, body").animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
            return false;
        });
    };

    new WOW().init();

    var toggleMenu = function () {
        $(".header-menu").on("click", function () {
            $(".side-menu__block").addClass("active");
        });

        $(".side-menu__block-overlay,.side-menu__toggler, .scrollToLink").on(
            "click",
            function (e) {
                $(".side-menu__block").removeClass("active");
                e.preventDefault();
            }
        );
    }

    var topSearch = function () {
        $(document).on('click', function (e) {
            var clickID = e.target.id;
            if ((clickID !== 's')) {
                $('.top-search').removeClass('show');
            }
        });

        $('.show-search').on('click', function (event) {
            event.stopPropagation();
        });

        $('.search-form').on('click', function (event) {
            event.stopPropagation();
        });

        $('.show-search').on('click', function (event) {
            if (!$('.top-search').hasClass("show")) {
                $('.top-search').addClass('show');
                event.preventDefault();
            }

            else
                $('.top-search').removeClass('show');
            event.preventDefault();

            if (!$('.show-search').hasClass("active"))
                $('.show-search').addClass('active');
            else
                $('.show-search').removeClass('active');
        });
    }


    var flatProgressBar = function () {
        $('.couter').appear(function () {
            $('.chart').easyPieChart({
                easing: 'easeOut',
                lineWidth: 5,
                size: 90,
                scaleColor: false,
                barColor: '#FD4A36',
                trackColor: '#FFE2DE',
                animate: 5000,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

        }, {
            offset: 400
        });
    };

    var popUpLightBox = function () {
        if ($(".lightbox-image").length) {
            $(".lightbox-image").fancybox({
                openEffect: "fade",
                closeEffect: "fade",
                helpers: {
                    media: {}
                }
            });
        }
    };

    var donatProgress = function () {
        $(".content-progress-box").appear(function () {
            $(this).find("div.donat-bg").each(function () {
                $(this).find(".custom-donat").delay(600).animate({
                    width: $(this).attr("data-percent")
                }, 1000, "easeInCirc");
            });
        });
    };

    var Preloader = function () {
        setTimeout(function () {
            $(".preload").fadeOut('slow', function () {
                $(this).remove();
            });
        }, 1500);
    };

    // Dom Ready
    $(function () {
        flatSpacer();
        flatContentBox();
        topSearch();
        flatIsotopeCase();
        flatAccordion();
        swClick();
        popUpLightBox();
        goTop();
        toggleMenu();
        Parallax();
        flatCounter();
        flatProgressBar();
        donatProgress();
        Preloader();
    });

})(jQuery);
