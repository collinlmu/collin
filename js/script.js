$(document).ready(function() {
  $(".one").fadeIn(6000).removeClass("hidden")
  $(".two").fadeIn(7000).removeClass("hidden")
  $(".three").fadeIn(8000).removeClass("hidden")
  $(".four").fadeIn(9000).removeClass("hidden")

  $(".beartrouble").mouseenter(function(){
    $(".beartrouble").animate({
      width: "100%",
      height:"100%"
    }, 600);
  });

  $(".beartrouble").mouseleave(function() {
    $(".beartrouble").animate({
      width:"50%",
      height:"50%"
    }, 600);
  });
  $(".hasmat").mouseenter(function(){
    $(".hasmat").animate({
      width: "100%",
      height:"100%"
    }, "slow");
  });

  $(".hasmat").mouseleave(function() {
    $(".hasmat").animate({
      width:"50%",
      height:"50%"
    }, "slow");
  });
  $(".kidgang").mouseenter(function(){
    $(".kidgang").animate({
      width: "100%",
      height:"100%"
    }, "slow");
  });

  $(".kidgang").mouseleave(function() {
    $(".kidgang").animate({
      width:"50%",
      height:"50%"
    }, "slow");
  });

  $(".sandp").mouseenter(function(){
    $(".sandp").animate({
      width: "100%",
      height:"100%"
    }, "slow");
  });

  $(".sandp").mouseleave(function() {
    $(".sandp").animate({
      width:"50%",
      height:"50%"
    }, "slow");
  });

  $(".view").mouseenter(function(){
    $(".view").animate({
      width: "100%",
      height:"100%"
    }, "slow");
  });

  $(".view").mouseleave(function() {
    $(".view").animate({
      width:"50%",
      height:"50%"
    }, "slow");
  });

  $(".lights").mouseenter(function(){
    $(".lights").animate({
      width: "100%",
      height:"100%"
    }, "slow");
  });

  $(".lights").mouseleave(function() {
    $(".lights").animate({
      width:"50%",
      height:"50%"
    }, "slow");
  });

  $(".wallart").mouseenter(function(){
    $(".wallart").animate({
      width: "100%",
      height:"100%"
    }, "slow");
  });

  $(".wallart").mouseleave(function() {
    $(".wallart").animate({
      width:"50%",
      height:"50%"
    }, "slow");
  });

  $(".garden").mouseenter(function(){
    $(".garden").animate({
      width: "100%",
      height:"100%"
    }, "slow");
  });

  $(".garden").mouseleave(function() {
    $(".garden").animate({
      width:"50%",
      height:"50%"
    }, "slow");
  });

  $(".castle").mouseenter(function(){
    $(".castle").animate({
      width: "100%",
      height:"100%"
    }, "slow");
  });

  $(".castle").mouseleave(function() {
    $(".castle").animate({
      width:"50%",
      height:"50%"
    }, "slow");
  });

  $(".vancouver").mouseenter(function(){
    $(".vancouver").animate({
      width: "100%",
      height:"100%"
    }, "slow");
  });

  $(".vancouver").mouseleave(function() {
    $(".vancouver").animate({
      width:"50%",
      height:"50%"
    }, "slow");
  });

  $(".panda").mouseenter(function(){
    $(".panda").animate({
      width: "100%",
      height:"100%"
    }, "slow");
  });

  $(".panda").mouseleave(function() {
    $(".panda").animate({
      width:"50%",
      height:"50%"
    }, "slow");
  });

  $(".turtle").mouseenter(function(){
    $(".turtle").animate({
      width: "100%",
      height:"100%"
    }, "slow");
  });

  $(".turtle").mouseleave(function() {
    $(".turtle").animate({
      width:"50%",
      height:"50%"
    }, "slow");
  });

  $(".vw").mouseenter(function(){
    $(".vw").animate({
      width: "100%",
      height:"100%"
    }, "slow");
  });

  $(".vw").mouseleave(function() {
    $(".vw").animate({
      width:"50%",
      height:"50%"
    }, "slow");
  });









  $('body').RainSnow({
  	effect_name: 'rain',
  	drop_appear_speed: 100,
  	drop_falling_speed: 7000,
  	wind_direction: 3,
  	drop_rotate_angle : '-10deg',
  	drop_count_width_height:[[2,10], [2,15], [2,20]],
  	lighting_effect : [true, 50]
  });


});
