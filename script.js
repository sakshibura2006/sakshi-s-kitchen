let tasks = [];

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        name: task,
        completed: false
    });

    input.value = "";
    displayTasks();
}

function displayTasks() {
    let list = document.getElementById("taskList");

    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <span onclick="completeTask(${index})"
                  class="${task.completed ? "completed" : ""}">
                ${task.name}
            </span>

            <button class="delete" onclick="deleteTask(${index})"> Delete </button>
        `;

        list.appendChild(li);
    });

    updateCount();
}

function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function updateCount() {
    let completed = tasks.filter(task => task.completed).length;
    let pending = tasks.length - completed;

    document.getElementById("completed").innerText = completed;
    document.getElementById("pending").innerText = pending;
}

function toggleTheme() {
    document.body.classList.toggle("dark");

    let button = document.querySelector(".theme-btn");

    if (document.body.classList.contains("dark")) {
        button.innerText = "☀️ Light Mode";
    } else {
        button.innerText = "🌙 Dark Mode";
    }
}