$(".nice-block span").click(function () {

  const $box = $(this).parent();
  const $text = $(this);
  const fullHeight = $box.get(0).scrollHeight;

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