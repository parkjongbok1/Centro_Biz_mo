$(document).ready(function(){
  // meun-btn
  $(".menu").click(function () {

    if($(".meun-bar").hasClass("active")){

      $(this).removeClass("active");
      $(".meun-bar").removeClass("active");
    }else{
      $(".meun-bar").addClass("active");
      $(this).addClass("active");
    };
  });

});