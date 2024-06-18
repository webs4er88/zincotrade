/*
	Template Name: BiziPress - Finance, Consulting, Business HTML Template
	Author: Tripples
	Author URI: https://themeforest.net/user/tripples
	Description: BiziPress - Finance, Consulting, Business HTML Template
	Version: 1.0

	1. Fixed header
	2. Main slideshow
	3. Site search
	4. Owl Carousel
	5. Video popup
	6. Counter
	7. Contact form
	8. Back to top
  
*/


jQuery(function ($) {
   "use strict";



   $(window).on('load', function () {
      checkScreenSize();
      menuFixed();
   });

   /* ----------------------------------------------------------- */
   /*  Fixed header
   /* ----------------------------------------------------------- */

   function menuFixed() {
      var wWidth = $(window).width();
      if (wWidth > 974) {
         if ($('#header, #header-2 .site-nav-inner').length) {
            var sticky = $('#header, #header-2 .site-nav-inner'),
               scroll = $(window).scrollTop();

            if (scroll >= 400) sticky.addClass('fixed');
            else sticky.removeClass('fixed');

         };
      }
   }
   $(document).on('scroll', function () {
      menuFixed();
   });


   /* ----------------------------------------------------------- */
   /*  Mobile Menu
   /* ----------------------------------------------------------- */

   $(".dropdown-menu li").on("click", function () {
      $(".dropdown-menu li").removeClass("active");
      $(this).addClass("active");
   });

   function checkScreenSize() {
      var newWindowWidth = $(window).width();
      if (newWindowWidth < 991) {
         $("li.nav-item a").on("click", function () {
            $(this).parent("li").find(".dropdown-menu").slideToggle();
            $(this).find("i").toggleClass("fa-angle-down fa-angle-up");
         });
      } else {
         $("li.nav-item a").on("click", function () {
            console.log('do nothing');
         });
      }
   }
   /* ----------------------------------------------------------- */
   /*  Contact Map 
   /* -----------------------------------------------------------*/

   if ($('#map').length > 0) {

      var contactmap = {
         lat: -37.816218,
         lng: 144.964068
      };

      $('#map')
         .gmap3({
            zoom: 12,
            center: contactmap,
            scrollwheel: false,
            mapTypeId: "shadeOfGrey",
            mapTypeControlOptions: {
               mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
            }
         })

         .styledmaptype(
            "shadeOfGrey", [

               {
                  "featureType": "administrative",
                  "elementType": "geometry.stroke",
                  "stylers": [{
                     "color": "#fefefe"
                  }, {
                     "lightness": 17
                  }, {
                     "weight": 1.2
                  }]
               },
               {
                  "featureType": "administrative",
                  "elementType": "geometry.fill",
                  "stylers": [{
                     "color": "#fefefe"
                  }, {
                     "lightness": 20
                  }]
               },
               {
                  "featureType": "transit",
                  "elementType": "geometry",
                  "stylers": [{
                     "color": "#f2f2f2"
                  }, {
                     "lightness": 19
                  }]
               },
               {
                  "featureType": "all",
                  "elementType": "labels.icon",
                  "stylers": [{
                     "visibility": "off"
                  }]
               },
               {
                  "featureType": "all",
                  "elementType": "labels.text.fill",
                  "stylers": [{
                     "saturation": 36
                  }, {
                     "color": "#333333"
                  }, {
                     "lightness": 40
                  }]
               },
               {
                  "featureType": "all",
                  "elementType": "labels.text.stroke",
                  "stylers": [{
                     "visibility": "on"
                  }, {
                     "color": "#ffffff"
                  }, {
                     "lightness": 16
                  }]
               },
               {
                  "featureType": "poi",
                  "elementType": "geometry",
                  "stylers": [{
                     "color": "#f5f5f5"
                  }, {
                     "lightness": 21
                  }]
               },
               {
                  "featureType": "road.local",
                  "elementType": "geometry",
                  "stylers": [{
                     "color": "#ffffff"
                  }, {
                     "lightness": 16
                  }]
               },
               {
                  "featureType": "road.arterial",
                  "elementType": "geometry",
                  "stylers": [{
                     "color": "#ffffff"
                  }, {
                     "lightness": 18
                  }]
               },
               {
                  "featureType": "road.highway",
                  "elementType": "geometry.stroke",
                  "stylers": [{
                     "color": "#ffffff"
                  }, {
                     "lightness": 29
                  }, {
                     "weight": 0.2
                  }]
               },
               {
                  "featureType": "road.highway",
                  "elementType": "geometry.fill",
                  "stylers": [{
                     "color": "#ffffff"
                  }, {
                     "lightness": 17
                  }]
               },
               {
                  "featureType": "landscape",
                  "elementType": "geometry",
                  "stylers": [{
                     "color": "#f5f5f5"
                  }, {
                     "lightness": 20
                  }]
               },
               {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [{
                     "color": "#e9e9e9"
                  }, {
                     "lightness": 17
                  }]
               }
            ], {
               name: "HQ"
            }
         )

         .marker({
            position: contactmap,
            icon: 'images/map-icon.png'
         })

         .infowindow({
            position: contactmap,
            content: "16122 Collins Street West. Victoria"
         })

         .then(function (infowindow) {
            var map = this.get(0);
            var marker = this.get(1);
            marker.addListener('click', function () {
               infowindow.open(map, marker);
            });
         });
   }

   /* ----------------------------------------------------------- */
   /*  Main slideshow
   /* ----------------------------------------------------------- */

   $('#main-slide').carousel({
      pause: true,
      interval: 6000,
   });


   /* ----------------------------------------------------------- */
   /*  Site search
    /* ----------------------------------------------------------- */

   $('.nav-search').on('click', function () {
      $('.search-block').fadeIn(350);
      $(this).fadeOut(350);
   });

   $('.search-close').on('click', function () {
      $('.search-block').fadeOut(350);
      $('.nav-search').fadeIn(350);
   });



   /* ----------------------------------------------------------- */
   /*  Owl Carousel
   /* ----------------------------------------------------------- */

   //Testimonial slide

   $(".testimonial-slide").owlCarousel({

      loop: true,
      autoplay: false,
      autoplayHoverPause: true,
      nav: true,
      margin: 0,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      smartSpeed: 900,
      navText: ["<i class='icon icon-left-arrow2'></i>", "<i class='icon icon-right-arrow2'></i>"],
      items: 1,
      responsive: {
         0: {
            items: 1,
            nav: false,
         },
         600: {
            items: 1,
            nav: false,
         },
         1000: {
            nav: true,
         }
      }

   });



   //Partners slide

   $("#partners-carousel").owlCarousel({
      loop: true,
      autoplay: false,
      autoplayHoverPause: true,
      nav: true,
      margin: -50,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      smartSpeed: 900,
      navText: ["<i class='icon icon-left-arrow2'></i>", "<i class='icon icon-right-arrow2'></i>"],
      items: 5,
      responsive: {
         0: {
            items: 2,
            nav: false,
         },
         600: {
            items: 2,
            nav: false,
         },
         1000: {
            items: 5
         }
      }

   });


   //Page slide

   $(".page-slider").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
      nav: true,
      margin: 0,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      smartSpeed: 800,
      navText: ["<i class='icon icon-left-arrow2'></i>", "<i class='icon icon-right-arrow2'></i>"],
      items: 1,
      responsive: {
         0: {
            items: 1,
            nav: false,
         },
         600: {
            items: 1,
            nav: false,
         },
         1000: {
            items: 1,
            nav: true,
         }
      }

   });

   //Page slide
   $(".featured-cases-slide").owlCarousel({

      loop: true,
      autoplay: false,
      autoplayHoverPause: true,
      nav: true,
      margin: 0,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      smartSpeed: 900,
      navText: ["<i class='icon icon-left-arrow2'></i>", "<i class='icon icon-right-arrow2'></i>"],
      items: 1,
      responsive: {
         0: {
            items: 1,
            nav: false,
         },
         600: {
            items: 1,
            nav: false,
         },
         1000: {
            animateOut: 'fadeOut',
         }
      }

   });



   /* ----------------------------------------------------------- */
   /*  Video popup
   /* ----------------------------------------------------------- */
   $(document).ready(function () {

      $(".gallery-popup").colorbox({
         rel: 'gallery-popup',
         transition: "fade",
         innerHeight: "500"
      });

      $(".popup").colorbox({
         iframe: true,
         innerWidth: 600,
         innerHeight: 400
      });

   });


   /* ----------------------------------------------------------- */
   /*  Counter
   /* ----------------------------------------------------------- */

   $('.counterUp').counterUp({
      delay: 10,
      time: 1000
   });



   /* ----------------------------------------------------------- */
   /*  Contact form
   /* ----------------------------------------------------------- */

   $('#contact-form').submit(function () {

      var $form = $(this),
         $error = $form.find('.error-container'),
         action = $form.attr('action');

      $error.slideUp(750, function () {
         $error.hide();

         var $name = $form.find('.form-name'),
            $phone = $form.find('.form-phone'),
            $email = $form.find('.form-email'),
            $url = $form.find('.form-website'),
            $message = $form.find('.form-message');

         $.post(action, {
               name: $name.val(),
               phone: $phone.val(),
               email: $email.val(),
               url: $url.val(),
               message: $message.val()
            },
            function (data) {
               $error.html(data);
               $error.slideDown('slow');

               if (data.match('success') != null) {
                  $name.val('');
                  $phone.val('');
                  $email.val('');
                  $url.val('');
                  $message.val('');
               }
            }
         );

      });

      return false;

   });

   /*-------------------------------------------------------------*/
   /* FAQ Page
   /*-------------------------------------------------------------*/

   function toggleIcon(e) {
      $(e.target)
         .prev('.panel-heading')
         .find(".fa")
         .toggleClass('fa-plus fa-minus ');
   }
   $('.panel-group').on('hidden.bs.collapse', toggleIcon);
   $('.panel-group').on('shown.bs.collapse', toggleIcon);

   /* ----------------------------------------------------------- */
   /*  Back to top
   /* ----------------------------------------------------------- */

   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
             $('#back-to-top').fadeIn();
      } else {
             $('#back-to-top').fadeOut();
            }
      });

      // scroll body to 0px on click
      $('#back-to-top').on('click', function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                  scrollTop: 0
            }, 800);
            return false;
      });

      $('#back-to-top').tooltip('hide');

   /* ----------------------------------------------------------- */
   /*  Packery
   /* ----------------------------------------------------------- */

   if ($('.carrer-gallery-layout').length > 0) {
      $('.carrer-gallery-layout').packery({
         percentPosition: true,
         gutter: 10,
      })
   }

});