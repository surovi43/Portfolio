var mainNavbar = document.getElementById("main-navbar");
var navigationMenu = document.getElementById("navigation-menu");

// Initialize animate on scroll
AOS.init();

function toggleVisibility() {
   navigationMenu.classList.toggle("hidden");
}

function handleScrollY() {
   var scrollY = window.scrollY;
   var navigationContainerHeight = mainNavbar.getBoundingClientRect().height;

   if (scrollY > navigationContainerHeight) {
      mainNavbar.classList.add("nav-scroll");
      mainNavbar.classList.add("text-black");
   } else {
      mainNavbar.classList.remove("nav-scroll");
      mainNavbar.classList.remove("text-black");
   }
}

$(function () {
   "use strict";

   // lenis smooth scroll
   const lenis = new Lenis({
      duration: 0.25,
   });
   lenis.on("scroll", handleScrollY);

   function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
   }
   requestAnimationFrame(raf);
});

$(window).on("load", function () {
   // Preloader
   $(".loading").addClass("loading-end").fadeOut(1000);

   // navbar scrolling background
   handleScrollY();

   // magnificPopup
   $("#activities .card").magnificPopup({
      delegate: "a",
      type: "image",
      gallery: {
         enabled: true,
         navigateByImgClick: true,
         preload: [0, 1],
      },
   });
});
