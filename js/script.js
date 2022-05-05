$("button").click(function () {
    let $input = $("#input-area").val()
    let $list = $("#list");
    let newListItem = document.createElement('li');
    newListItem.innerHTML = `</a><i class="fa-solid fa-circle-xmark fa-lg"></i> ${$input}`;
    $list.append(newListItem);
})

let list = document.getElementById('skills-list');

list.addEventListener('click', (e) => {
    let target = e.target;
    if (target.tagName === "I") {
        target.parentElement.remove();
    }
})


