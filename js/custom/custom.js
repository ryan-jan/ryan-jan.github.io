$(".su-modal-closeicon").click(() => {
  $("#signup-modal").hide();
});
$(".su-modal-open-button").click(() => {
  $("#signup-modal").show();
});

// Overlay Ad Stuff
var hideOverlay = false;
$(".overlay-ad > span > i").click(() => {
  $(".overlay-ad").hide();
  hideOverlay = true;
});

$(document).scroll(() => {
  checkOffset();
  var y = $(this).scrollTop();
  if (y > 800 && hideOverlay != true) {
    $(".overlay-ad").show();
  } else {
    $(".overlay-ad").hide();
  }
});

function checkOffset() {
  if (
    $(".overlay-ad").offset().top + $(".overlay-ad").height() >=
    $(".footer-cta").offset().top - 10
  ) {
    //$(".overlay-ad").css("position", "absolute");
    //$(".overlay-ad-wrapper").css("position", "absolute");
    $(".overlay-ad").removeClass("fixed");
    $(".overlay-ad-wrapper").removeClass("fixed");
    $(".overlay-ad").addClass("sticky");
    $(".overlay-ad-wrapper").addClass("sticky");
  }
  if (
    $(document).scrollTop() + window.innerHeight <
    $(".footer-cta").offset().top
  ) {
    //$(".overlay-ad").css("position", "fixed");
    //$(".overlay-ad-wrapper").css("position", "fixed");
    $(".overlay-ad").removeClass("sticky");
    $(".overlay-ad-wrapper").removeClass("sticky");
    $(".overlay-ad").addClass("fixed");
    $(".overlay-ad-wrapper").addClass("fixed");
  }
}

$(document).ready(function () {
  $("code").each(function() {
    var html = $(this).html()
    html = html.replace(`<span class="token comment">#error</span>`, `<div class="error">`)
    html = html.replace(`<span class="token comment">#enderror</span>`, "</div>")
    $(this).html(html)
    $(".error").each(function() {
      $(this).children().each(function() {
        $(this).addClass("error")
      })
    })
  })
});