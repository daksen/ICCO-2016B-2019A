// PRELOADER
$(window).ready(function() {
  $("#preloader").fadeOut(500);
})

particlesJS.load('particles-js', '../particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});

// COLLAPSE
$('.navbar-collapse a').click(function () {
  $(".navbar-collapse").collapse('hide');
});

// SCROLL
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
  if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      event.preventDefault();
      $("html, body").animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {
          return false;
        } else {
          $target.attr("tabindex", "-1");
          $target.focus();
        }
      });
    }
  }
});

// GALLERY
$(document).ready(function() {
  $("#lightgallery").lightGallery({
    thumbnail:true,
    animateThumb: false,
    showThumbByDefault: false,
    subHtmlSelectorRelative: true
  }); 
});

function getRandomFloat() {
  return Math.random() * (30 + 30) - 30;
}

$(document).ready(function() {
  $(".polaroid").each(function(index, elem) {
    $(elem).css("transform", `rotate(${getRandomFloat()}deg)`);
  });
});