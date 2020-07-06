
  $(document).ready(function() {
    $(".spazio").mouseenter(function () {
      $(this).children().addClass("active")
  });

  $(".spazio").mouseleave(function () {
    $(this).children().removeClass("active")
});


});
