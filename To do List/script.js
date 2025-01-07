document.getElementById("taskForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");

    // Create a new list item with Bootstrap classes
    const taskItem = document.createElement("li");
    taskItem.className = "list-group-item d-flex justify-content-between align-items-center";
    taskItem.textContent = taskText;

    // Add a complete toggle
    taskItem.addEventListener("click", function () {
        taskItem.classList.toggle("text-decoration-line-through");
        taskItem.classList.toggle("text-muted");
    });

    // Add a delete button with Bootstrap classes
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn btn-danger btn-sm";
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
});
