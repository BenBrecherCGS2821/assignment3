const jQuery = typeof require !== "undefined" ? require("jquery") : $;

(function($) {
  $(document).ready(function() {
    $(".sidebar a").click(function(e) {
      e.preventDefault();

      const target = $(this).attr("href");
      location.hash = $(this).attr("href");

      const lnk = this;

      $(window)
        .scrollTop($(target).offset().top + 10)
        .one("scroll", function(e) {
          $(".sidebar a.active").removeClass("active");
          $(lnk).addClass("active");
        });

      $(".sidebar a.active").removeClass("active");
      $(this).addClass("active");
    });
  });

  $(window)
    .scroll(function() {
      const scrollDistance = $(window).scrollTop();

      $(".page_section").each(function(i) {
        if ($(this).position().top <= scrollDistance) {
          $(".sidebar a.active").removeClass("active");
          $(".sidebar a.internal_link")
            .eq(i)
            .addClass("active");
        }
      });
    })
    .scroll();
})(jQuery);
