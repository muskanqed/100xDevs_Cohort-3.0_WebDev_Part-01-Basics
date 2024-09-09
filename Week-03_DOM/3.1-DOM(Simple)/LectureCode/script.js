let currentIndex = 1;

function addTodo() {
    const inputEl = document.querySelector("input");
    const value = inputEl.value;

    const newEL = document.createElement("div");
    newEL.setAttribute("id", currentIndex)
    newEL.innerHTML = "div" + value + "</div>" + "<button onclick = 'deleteTodo(" + currentIndex + ")'>Delete</button>";
    document.querySelector("body").appendChild(newEL);
    currentIndex = currentIndex + 1;
}

function deleteTodo(index) {
    const deleteEL = document.getElementById(index);
    deleteEL.parentNode.removeChild(deleteEL)
}
