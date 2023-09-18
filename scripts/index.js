// Header carousel
$(document).ready(function () {
  $(".header_carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    centerMode: true,
    variableWidth: true,
  });
});
// Gallery carousel
$(document).ready(function () {
  $(".gallery_carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: true,
    variableWidth: true,
  });
});
$(document).ready(function () {
  $(".video_block_carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    centerMode: true,
    variableWidth: true,

    prevArrow: $(".video_left"),
    nextArrow: $(".video_right"),
  });
});

// Navigation active
// var navItems = document.querySelectorAll(".nav_links a");
// for (var i = 0; i < navItems.length; i++) {
//   if (navItems[i].href == window.location.href) {
//     navItems[i].className = "active_nav_menu";
//     console.log("window.location.href", window.location.href);
//     console.log(navItems[i].href);
//   }
// }

// // Mobile menu wrpper
// function toggleMenu() {
//   var element = document.querySelector(".nav_mob_menu");
//   element.classList.toggle("mob_menu_wrapper");
// }
