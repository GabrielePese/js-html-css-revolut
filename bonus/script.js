$(document).ready(function() {
    $(".spazio").mouseenter(function () {
      $(this).children().addClass("active")
  });

  $(".spazio").mouseleave(function () {
    $(this).children().removeClass("active")
});

  $(".fas").click(function(){
    $(".menu2").addClass ("active")
  });

  $(".close").click (function(){
    $(".menu2").removeClass ("active")
  });
});
