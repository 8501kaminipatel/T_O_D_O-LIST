let form = document.querySelector("form")
let input = document.querySelector("input")
let button = document.querySelector("button")
let info = document.getElementById("info")

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let ul = document.createElement("ul")
    info.append(ul)

    let li = document.createElement("li")
    ul.append(li)
    li.innerText = input.value;

    let editbtn = document.createElement("button")
    ul.append(editbtn)
    editbtn.innerHTML = "EDIT"

    let deletebtn = document.createElement("button")
    ul.append(deletebtn)
    deletebtn.innerHTML = "DELETE"

    document.querySelector("input").value = ""

    editbtn.addEventListener('click', () => {
        input.value = li.innerText;
        ul.remove();
    })

    deletebtn.addEventListener('click', () => {
        ul.remove();
    });
})
