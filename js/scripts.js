$(document).ready(function () {
  $("form#to-do-list").submit(function (event) {
    event.preventDefault();
    const inputArray = $("#toDo").val().split(",");
    $("#list").text(inputArray);
   // Business Logic for ToDoList //
    function List(task) {
      this.task = task;
    }

    let myTasks = new List(["sleep","eat","laugh"]);

    const Keys = Object.keys()
    // ToDoList.prototype.addTask = function (task) {
    //   this.task[task.name] = task;
    // };

    // // Constructor for task //
    // function Task(name) {
    //   this.name = name;
    // }


    inputArray.forEach(function (name) {

  });
});

let list = {};
list.task = ["eat","sleep"];
list.task.push("");

// 
// Prototypes //
// Task.prototype.name = function () {
//   // print out all the tasks


    // function List() {
    //   this.tasks = {};
    // }

    // List.prototype.addTask = function (task) {
    //   this.tasks[ToDo.task] = task;
    // };

    // function ToDo(task) {
    //   this.task = task;
    // }

    // // let List = new List();
    // let task1 = new ToDo("swim");
    // let task2 = new ToDo("code");
    // List.addTask(task1);
    // List.addTask(task2);

    // console.log(List);