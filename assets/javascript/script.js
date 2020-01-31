
var currentDay = moment().format("dddd MMM Do"); 
$(".date-pick").text(currentDay);

var day = JSON.parse(localStorage.getItem("day"));
console.log(day);

var todos = ["","","","","","","","",""];
var currentTime = moment().format('h');
var currentHour = moment().hour();
if (currentTime >= 1)
 currentTime = parseInt(currentTime) + 3;

init();

function renderTodos() {
  // Render values for each todo
   for (var i = 0; i <= 8; i++) {
    var todo = todos[i];
    var myInput = "input" + i;
    $("#"+myInput).val(todo);
    var j = i + 9;
    if(j < currentHour) {
      let myRow = "row" + i;
      $("#"+myRow).css("background-color","#DCDCDC");
      $("#input"+i).prop("disabled", true);
      $("#btn"+i).prop("disabled", true);
      $("#label"+i).css("color","white");
    }
    if(j === currentHour) {
      $("#row"+i).css("background-color","#FF4500");
      $("#label"+i).css("color","white");
    }
  }
}

function init() {
  // Clear todos after 6 pm
  if(currentDay != day) {
    clear();
    localStorage.setItem("day",JSON.stringify(currentDay));
  }
  // Get stored todos from localStorage
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // Render todos to the DOM
  renderTodos();
}

function clear() {
  for (var i = 0; i <= 8; i++) {
    todos[i] = "";
    storeTodos();
  }
}

function storeTodos() {
  console.log(todos);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// When a element inside of the todoList is clicked...
$(".btn").on("click", function(event) {
    // event.preventDefault();
    // event.stopImmediatePropagation();
    var id = event.currentTarget.id;
    // Get index value from the id of the target element
    var index = id.slice(id.length - 1);
    var todoId = "input" + index;
    //storing value in the 'index-9'th index of todos input since the todo list is starting from 9
    todos[index] = $("#"+todoId).val();
    if (todos[index] === "") {
      alert("Please enter a task before saving!");
      return;
    } else {
       // Store updated todos in localStorage
      storeTodos();
      alert("Saved!")
    }
});
