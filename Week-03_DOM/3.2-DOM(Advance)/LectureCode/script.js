function addTodo() {
  const inputEl = document.querySelector("input").value;

  const newDiv = document.createElement("div");

  const newSpan = document.createElement("span");
  newSpan.innerHTML = inputEl;

  const newBtn = document.createElement("button");
  newBtn.innerHTML = "Delete";

  newDiv.appendChild(newSpan);
  newDiv.appendChild(newBtn);

  document.querySelector("body").appendChild(newDiv);
}
