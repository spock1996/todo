// Todo list settings //

let id = 0;

const todoList = document.getElementById("todo-list");
const completedList = document.getElementById("completed-list");
const input = document.querySelector("input");
const btnAdd = document.getElementById("btn-add");

class AddTaskToList {
    addTask() {
        if(input.value === "") {
            return
        } else {
            const li = document.createElement("li");
            const checkBoxInput = document.createElement("input");
            const label = document.createElement("label");
            const deleteBtn = document.createElement("button");
            checkBoxInput.type = "checkbox";
            checkBoxInput.classList.add("check-box");
            checkBoxInput.setAttribute("id", `${id += 1}`);
            label.innerText = input.value;
            deleteBtn.innerText = "Delete";
            deleteBtn.classList.add("delete");
            li.appendChild(checkBoxInput);
            li.appendChild(label);
            li.appendChild(deleteBtn);
            checkBoxInput.onchange = crossTask;
            deleteBtn.onclick = removeTask;
            todoList.appendChild(li);
            input.value = "";
        }
        
    } 
}


function removeTask() {
    const task = this.parentElement;
    task.remove()
}


function crossTask() {
    let listItem = this;
    console.log(this);

    if(!this.parentElement.classList.contains("completed") ) {
        console.log("Klasa je dodata")
        this.parentElement.classList.add("completed");
        completedList.appendChild(this.parentElement);

    } else {
        this.parentElement.classList.remove("completed");
        todoList.appendChild(this.parentElement)
    }
    
}








btnAdd.addEventListener("click", function() {
    let createTask = new AddTaskToList();
    createTask.addTask();

})