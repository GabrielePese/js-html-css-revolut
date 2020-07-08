// PER FAR FUNZIONARE IL MENU A TENDINA

  $(document).ready(function() {
    $(".spazio").mouseenter(function () {
      $(this).children().addClass("active")
  });

  $(".spazio").mouseleave(function () {
    $(this).children().removeClass("active")
});

// PER ATTIVARE HAMBURGER MENU

$(".bottone-menu").click(function(){
  $(".menu2").toggleClass ("active")
});

// $(".close").click (function(){
//   $(".menu2").removeClass ("active")
// });


$(".freccia").click(function(){
  $(".dropdown1").toggleClass ("active")

});
$(".freccia2").click(function(){
  $(this).children().toggleClass ("active")

});
$(".freccia3").click(function(){
  $(this).children().toggleClass ("active")

});
$(".freccia4").click(function(){
  $(this).children().toggleClass ("active")

});
$(".freccia5").click(function(){
  $(this).children().toggleClass ("active")

});
});
