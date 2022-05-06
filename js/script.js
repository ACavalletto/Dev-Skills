let $list = $("#list");

$("button").click(function () {
  let $input = $("#input-area").val();
  if ($input !== "") {
    let $newListItem = $(
      `<li><i class ="fa-solid fa-circle-xmark fa-lg"></i> ${$input} </li>`
    );
      $list.append($newListItem);
    $("#input-area").val("");
  }
});

$list.on("click", "i", function () {
  $(this)
    .closest("li")
    .fadeOut(1000, function () {
      $(this.remove());
    });
});

let $clear = $("h3");
  $clear.on("click", function () {
    $list.fadeOut(1000, function () {
      $list.empty().fadeIn(1000);
    });
  });

