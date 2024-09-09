function addTodo() {
  const inputEl = document.querySelector("input");
  const value = inputEl.value.trim();

  if (value === "") {
    alert("Please enter a todo item.");
    return;
  }

  const parentEl = document.getElementById("todos");

  // Calculate new index based on the number of children
  const newIndex = parentEl.children.length + 1;

  const newTodo = document.createElement("div");
  newTodo.setAttribute("id", "todo-" + newIndex);

  const newHeading = document.createElement("h4");
  newHeading.textContent = newIndex + ". " + value;

  const newButton = document.createElement("button");
  newButton.textContent = "Delete";
  newButton.setAttribute("onclick", "deleteTodo(" + newIndex + ")");

  newTodo.appendChild(newHeading);
  newTodo.appendChild(newButton);

  parentEl.appendChild(newTodo);

  inputEl.value = "";
}

function deleteTodo(index) {
  const deleteEl = document.getElementById("todo-" + index);
  if (deleteEl) {
    deleteEl.parentNode.removeChild(deleteEl);
  }

  // Re-number the remaining todos
  const parentEl = document.getElementById("todos");
  const children = parentEl.children;

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    const newIndex = i + 1;

    // Update the ID
    child.setAttribute("id", "todo-" + newIndex);

    // Update the heading text
    const heading = child.querySelector("h4");
    heading.textContent = newIndex + ". " + heading.textContent.substring(3);

    // Update the delete button's onclick attribute
    const button = child.querySelector("button");
    button.setAttribute("onclick", "deleteTodo(" + newIndex + ")");
  }
}
