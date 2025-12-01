document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") return;

    const taskList = document.getElementById("taskList");

    const task = document.createElement("div");
    task.className = "task";

 
    const text = document.createElement("span");
    text.textContent = taskText;


  const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
        taskList.remove();
    });
    task.appendChild(text);
    task.appendChild(delBtn);
    taskList.appendChild(task);

    input.value = "";
}
