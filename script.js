
  $(document).ready(function() {
    $(".spazio").mouseenter(function () {
      $(this).children(".dropdown").addClass("active")
  });

  $(".spazio").mouseleave(function () {
    $(this).children(".dropdown").removeClass("active")
});


});
