$(".nav-title").click(function () {
  $(".nb").hide();
  $(".l").hide();
  $(".nb-menu").css("left", "0");
  $(".greeting").css("right", "0");
  $("body").css("background", "#141414");
  $(".go-back").css("bottom", "0");
  $(".logo").hide();
});

$(".back").click(function () {
  $(".nb").css("left", "0");
  $(".nb-menu").css("left", "-45vw");
  $(".greeting").css("right", "-45vw");
  $("body").css("background", "black");
  $(".go-back").css("bottom", "100vh");
  $(".logo").css("display", "block");
  delay(2000, function(){
    $(".nb").show();
    $(".logo").show(500);
  });
});


function delay(ms = 1000, func){
  setTimeout(function(){
    func();
  }, ms);
}
