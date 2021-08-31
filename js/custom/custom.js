$(".su-modal-closeicon").click(() => {
  $("#signup-modal").hide();
});
$(".su-modal-open-button").click(() => {
  $("#signup-modal").show();
});

// overlay toc stuff
$(document).scroll(() => {
  checkTocOffset();
});

function checkTocOffset() {
  if (window.innerHeight - 100 >= $(".overlay-toc").height()) {
    if ($(this).scrollTop() <= $(".gh-content").offset().top) {
      $(".overlay-toc").removeClass("fixed");
      $(".overlay-toc").addClass("sticky");
      $(".overlay-toc").offset({ top: $(".gh-content").offset().top });
      $(".overlay-toc").css({"padding-top": "1.5vmin", "padding-bottom": "0px"})
    }
    if ($(this).scrollTop() >= $(".gh-content").offset().top - 72) {
      $(".overlay-toc").removeClass("sticky");
      $(".overlay-toc").addClass("fixed");
      $(".overlay-toc").css({ top: "72px" });
      $(".overlay-toc").css({"padding-top": "0px", "padding-bottom": "8vmin"})
    }
    if ($(".overlay-toc").offset().top + $(".overlay-toc").height() >= $(".gh-content").offset().top + $(".gh-content").height()) {
      $(".overlay-toc").removeClass("fixed");
      $(".overlay-toc").addClass("sticky");
      $(".overlay-toc").offset({ top: $(".gh-content").offset().top + $(".gh-content").height() - $(".overlay-toc").height() });
    }
  }
}

$(document).ready(function() {
  if (window.innerWidth >= 1366) {
    createTocList("#toc-list");
    $(".overlay-toc").removeClass("fixed");
    $(".overlay-toc").addClass("sticky");
    $(".overlay-toc").offset({ top: $(".gh-content").offset().top });
    $(".overlay-toc").css({"padding-top": "1.5vmin", "padding-bottom": "0px"})
  } else {
    $(".overlay-toc").hide()
  }
})

function createTocList(tocList) {
  $(tocList).empty();

  $(".gh-content h2").each(function () {
    var anchor = "<a name='" + $(this).text() + "'></a>";
    $(this).before(anchor);

    var li = "<li><a href='#" + $(this).text() + "'>" + $(this).text() + "</a></li>";
    $(tocList).append(li)
  });
};

/* error formatting prism.js override */
$(document).ready(function () {
  $("code").each(function () {
    var html = $(this).html();
    html = html.replace(
      `<span class="token comment">#error</span>`,
      `<div class="error">`
    );
    html = html.replace(
      `<span class="token comment">#enderror</span>`,
      "</div>"
    );
    $(this).html(html);
    $(".error").each(function () {
      $(this)
        .children()
        .each(function () {
          $(this).addClass("error");
        });
    });
  });
});
