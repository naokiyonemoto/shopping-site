
//スライドショー
$(window).load(function(){
  $("#list_img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: false
        }
    );
});

$(document).ready(function(){
  $(".menu_icon_sp").click(function(){
    $(".sp_menu_toggle").slideToggle();
  });
});