// "use strict";

;(function($) {
  let $window = $(window);

  $(function () {
    $window.on('scroll', function() {
      checkScrollHeader();
    });

  //   $window.on('resize', function () {
  //   });

    $('.js-move-scroll').on('click', function (ev) {
      ev.preventDefault();

      let dest = $(this).data('href');

      moveScroll(dest);
    });

    $('.Service__link').on('click', function (ev) {
      let parent = $('#servicios'),
          parentSubcategory = $('#servicios-subcategories');

      parent.addClass('hide');
    });

    $('.Service__return').on('click', function (ev) {
      let parent = $('#servicios'),
          parentSubcategory = $('#servicios-subcategories');

      parent.removeClass('hide');
    });

    checkScrollHeader();

  //   $('.ArrowTop').on('click', (ev) => {
  //     ev.preventDefault();

  //     $('html, body').animate({
  //       scrollTop: 0
  //     }, 800);
  //   });
  });

  let moveScroll = (dest) => {
    $('html, body').stop().animate({
      scrollTop: $(dest).offset().top
    }, 800);
  }

  let checkScrollHeader = () => {
    let minScroll = 50,
        header = document.querySelector('.Header');

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > minScroll) {
      header.classList.add('Header--scroll');
    } else {
      header.classList.remove('Header--scroll');
    }
  }

  // let hViewport = () => {
  //   return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  // }

  // let wViewport = () => {
  //   return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  // }

  // let getHHeader = () => {
  //   return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--height-header'));
  // }

  // let heightHeader = () => {
  //   let hHeader = parseFloat($('.Header').innerHeight());

  //   document.documentElement.style.setProperty('--height-header', `${hHeader}px`);
  // }
})(jQuery);
