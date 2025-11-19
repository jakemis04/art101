
let $popup = $("<div class='popup-tip'></div>").appendTo("body").hide();

$(".nice-block span")
    .mouseenter(function (e) {
        const text = $(this).parent().data("popup"); 
        $popup.text(text);

        $popup.css({
            top: e.pageY + 10,
            left: e.pageX + 10
        }).fadeIn(150);
    })
    .mousemove(function (e) {
        
        $popup.css({
            top: e.pageY + 10,
            left: e.pageX + 10
        });
    })
    .mouseleave(function () {
        $popup.fadeOut(150);
    });



$(".nice-block span").click(function () {

  const $box = $(this).parent();
  const $text = $(this);
  const fullHeight=$box.get(0).scrollHeight;

  if ($text.html() === "more") {
  
    $box.animate({ height: fullHeight }, 500, function () {
      $box.css("height", "auto"); 
    });
    $text.html("less");
  } else {
  
    $box.animate({ height: "40px" }, 500);
    $text.html("more");
  }
});