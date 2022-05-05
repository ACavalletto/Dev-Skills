$("button").click(function () {
    let $input = $("#input-area").val()
    let $list = $("#list");
    let newListItem = document.createElement('li');
    newListItem.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ${$input}`;
    $list.append(newListItem);
})

$("i").click(function (e) {
    let target = e.target;
    target.parentElement.remove();

})