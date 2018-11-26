"use strict";

// ;(function($) {
  // let $window = $(window)

  // $(function () {
  //   $window.on('scroll', function() {
  //   });

  //   $window.on('resize', function () {
  //   });

  //   $('.ArrowTop').on('click', (ev) => {
  //     ev.preventDefault();

  //     $('html, body').animate({
  //       scrollTop: 0
  //     }, 800);
  //   });
  // });

  let hViewport = () => {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

  let wViewport = () => {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  // let getHHeader = () => {
  //   return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--height-header'));
  // }

  // let heightHeader = () => {
  //   let hHeader = parseFloat($('.Header').innerHeight());

  //   document.documentElement.style.setProperty('--height-header', `${hHeader}px`);
  // }
// })(jQuery);
