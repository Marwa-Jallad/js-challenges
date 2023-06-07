let con = document.getElementsByClassName("countainer")[0];
let input = document.getElementsByClassName("input")[0];
let submit = document.getElementsByClassName("add")[0];
let tasksDiv = document.getElementsByClassName("tasks")[0];
//[1] firs we made the submit event with a function to
//make sure the input value is not empty so we dont add empty div
//then to make function to add the input tasks in array we will create
//then we make sure the input value to be empty again after submitting
//[2] we create an array to put the tasks in it
//[3] make a function to create the div
//[4]add tasks to local storage
//[5] get tasks from local storage
//[6] check if there is tasks in local storge so in (onload) the page the tasks will not be erased
//[7] add event listner to delete span to delete from div and local storage

// [2] create array to add task in
let arrayOfTasks = [];

if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(window.localStorage.getItem("tasks"));
}
//[1] add task
submit.onclick = function () {
  if (input.value !== "") {
    // ill add a function to add tasks to array i will create
    addTaskToArray(input.value); //add task to array of tasks
    input.value = ""; // make the input field empty after adding the task
  }
};
tasksDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    //remove tasks from local storage
    deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
    //remove element from page
    e.target.parentElement.remove();
  }
  //task element
  if (e.target.classList.contains("task")) {
    //toggle completed for the task
    toggleStatusTaskWith(e.target.getAttribute("data-id"));
    //toggle done class
    e.target.classList.toggle("done");
  }
});
// making the function addTaskToArray wich is in [1]
function addTaskToArray(taskText) {
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  //push task to arrayOfTasks
  arrayOfTasks.push(task);
  //Add Tasks To page
  addElementsToPageFrom(arrayOfTasks);
  //add tasks to local storage
  addDataToLocalStorageFrom(arrayOfTasks);
  // console.log(arrayOfTasks);
  // console.log(JSON.stringify(arrayOfTasks));the differance that json make the array as strings
}
// [3] make a function to create the div
function addElementsToPageFrom(arrayOfTasks) {
  // Empty Tasks div
  tasksDiv.innerHTML = "";
  //Looping On Array Of Tasks
  arrayOfTasks.forEach((task) => {
    //creat main div
    let div = document.createElement("div");
    div.className = "task";
    if (task.completed) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id); // this is the id we created in the object (const task )
    let text = document.createTextNode(task.title); // the title we created in the object also
    div.appendChild(text);
    // creat Delete button
    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Delete")); // Or we can creat the text then append it
    // Append button to mail div
    div.appendChild(span); // add the delete button to main div
    // add task div to tasksDiv
    tasksDiv.appendChild(div);
    //styling
    div.style.backgroundColor = "white";
    div.style.padding = "20px";
    div.style.margin = "auto";
    div.style.borderRadius = "5px";
    div.style.width = "250px";
    div.style.position = "relative";
    span.style.backgroundColor = "red";
    span.style.color = "white";
    span.style.padding = "5px";
    span.style.margin = "10px";
    span.style.borderRadius = "5px";
    span.style.position = "absolute";
    span.style.right = "5px";
    span.style.bottom = "5px";
  });
}

function addDataToLocalStorageFrom(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}
function getDataFromLocalStorge() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElementsToPageFrom(tasks);
  }
}
getDataFromLocalStorge();

function deleteTaskWith(taskId) {
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addDataToLocalStorageFrom(arrayOfTasks);
}
function toggleStatusTaskWith(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].completed == false
        ? (arrayOfTasks[i].completed = true)
        : arrayOfTasks[i].completed == false;
    }
  }
  addDataToLocalStorageFrom(arrayOfTasks);
}

con.style.backgroundColor = "#e2dfdf";
con.style.padding = "20px";
con.style.width = "320px";
con.style.textAlign = "center";
con.style.borderRadius = "20px";
input.style.padding = "30px";
input.style.borderRadius = "20px";
input.style.border = "none";
submit.style.backgroundColor = "red";
submit.style.color = "white";
submit.style.padding = "20px";
submit.style.borderRadius = "15px";
tasksDiv.style.width = "300px";
tasksDiv.style.backgroundColor = "#e2dfdf";
tasksDiv.style.padding = "30px";
tasksDiv.style.borderRadius = "20px";
