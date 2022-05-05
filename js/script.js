$("button").click(function () {

  let $input = $("#input-area").val();
  if ($input !== "") {
    let $newListItem = $(`<li><i class ="fa-solid fa-circle-xmark fa-lg"></i> ${$input} </li>`)
    let $list = $("#list");
    $list.append($newListItem);
  }
});

let $list = $("#list");

$list.on("click", "i", function () {
  $(this)
    .closest("li")
    .fadeOut(1000, function () {
      $(this.remove());
    });
});



// original JS code for functionality;
 // let newListItem = document.createElement("li");
// newListItem.innerHTML = `<i class="fa-solid fa-circle-xmark fa-lg"></i> ${$input}`;

// let list = document.getElementById("skills-list");

// list.addEventListener("click", (e) => {
//   let target = e.target;
//   if (target.tagName === "I") {
//     target.parentElement.remove();
//   }
// });
