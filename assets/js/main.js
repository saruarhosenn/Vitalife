(function ($) {
  "use strict";
  /* ======= Sticky Menu ======= */
  var windows = $(window);
  var sticky = $(".header-sticky");
  windows.on("scroll", function () {
    var scroll = windows.scrollTop();
    if (scroll < 250) {
      sticky.removeClass("stick");
    } else {
      sticky.addClass("stick");
    }
  });

  /* ====== Open Mobile Menu ====== */
  $(".menu-show-btn").click(function () {
    $(".main-menu").addClass("navBar show-menu");
  });
  $(".menu-hide-btn").click(function () {
    $(".main-menu").removeClass("navBar show-menu");
  });

  /* ====== Your Health Slider ====== */
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    margin: 12,
    nav: false,
    dots: false,
    mouseDrag: true,
    stagePadding: 35,
    items: 1,
    responsive: {
      370: {
        stagePadding: 51,
      },
      391: {
        stagePadding: 40,
      },
      440: {
        stagePadding: 60,
        margin: 20,
      },
      768: {
        items: 2,
        stagePadding: 60,
        margin: 20,
      },
      992: {
        items: 3,
        stagePadding: 60,
        margin: 20,
      },
      1200: {
        items: 4,
        stagePadding: 60,
        margin: 20,
      },
    },
  });
})(jQuery);
