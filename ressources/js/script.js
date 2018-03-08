$(document).ready(function() {

  $("h1").click(function () {
    $(this).css("background-color", "#ff0000");
  })

    $(".js--waypoint-photos").waypoint(function(direction) {
      if (direction=="down"){
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    })

    $(".js-scroll-photos").click(function() {
      $("html, body").animate({scrollTop: $(".js-section-photos").offset().top});
    })
