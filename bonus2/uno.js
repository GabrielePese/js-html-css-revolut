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
  $(".dropdown2").toggleClass ("active")

});
$(".freccia3").click(function(){
  $(".dropdown3").toggleClass ("active")

});
$(".freccia4").click(function(){
  $(".dropdown4").toggleClass ("active")

});
$(".freccia5").click(function(){
  $(".dropdown5").toggleClass ("active")

});
$(".freccia6").click(function(){
  $(".dropdown6").toggleClass ("active")

});
$(".freccia7").click(function(){
  $(".dropdown7").toggleClass ("active")

});
$(".freccia8").click(function(){
  $(".dropdown8").toggleClass ("active")

});
});
