"use strict";

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); // This function creates an <iframe> (and YouTube player)
// after the API code downloads.

function onYouTubeIframeAPIReady() {
  if (playerInfoList.length) {
    for (var i = 0; i < playerInfoList.length; i++) {
      players[i] = createPlayer(playerInfoList[i]);
    }
  }
}

function createPlayer(playerInfo) {
  return new YT.Player(playerInfo.idPlayer, {
    height: playerInfo.height,
    width: playerInfo.width,
    videoId: playerInfo.videoId,
    playerVars: {
      'rel': 0
    },
    events: {//'onReady': onPlayerReady,
      //'onStateChange': onPlayerStateChange
    }
  });
} // The API will call this function when the video player is ready.


function onPlayerReady(event) {
  event.target.playVideo();
} // The API calls this function when the player's state changes.
// The function indicates that when playing a video (state=1),
// the player should play for six seconds and then stop.


var done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

function stopVideoPlayer(player) {
  player.stopVideo();
}

function stopVideo() {
  player.stopVideo();
}

function loadVideoPlayer(player, id) {
  player.loadVideo(id);
}

function loadVideo(id) {
  player.loadVideoById(id);
}

function resizeVideoPlayer(player, width, height) {
  player.setSize(width, height);
}

function resizeVideo(width, height) {
  player.setSize(width, height);
}
"use strict";

// "use strict";
;

(function ($) {
  var $window = $(window);
  $(function () {
    $window.on('scroll', function () {
      checkScrollHeader();
    }); //   $window.on('resize', function () {
    //   });

    $('.js-move-scroll').on('click', function (ev) {
      ev.preventDefault();
      var dest = $(this).data('href');
      moveScroll(dest);
    });
    checkScrollHeader(); //   $('.ArrowTop').on('click', (ev) => {
    //     ev.preventDefault();
    //     $('html, body').animate({
    //       scrollTop: 0
    //     }, 800);
    //   });
  });

  var moveScroll = function moveScroll(dest) {
    $('html, body').stop().animate({
      scrollTop: $(dest).offset().top
    }, 800);
  };

  var checkScrollHeader = function checkScrollHeader() {
    var minScroll = 50,
        header = document.querySelector('.Header');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > minScroll) {
      header.classList.add('Header--scroll');
    } else {
      header.classList.remove('Header--scroll');
    }
  }; // let hViewport = () => {
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
//# sourceMappingURL=script.js.map
