
var currentDay = moment().format("dddd MMM Do"); 
$(".date-pick").text(currentDay);

// var todoInput = document.querySelector("#todo-text");
// var todoList = $("#todo-list");
// var todoCountSpan = document.querySelector("#todo-count");
var todos = [];
init();
// $(document).on('index:load', renderTodos());

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  //todoList.innerHTML = "";
  // Render a new li for each todo
   for (var i = 9; i <= 17; i++) {
    //var todo = todos[i];
    var myInput = "input" + i;
    // $("#"+myInput).val("todo");
    // li.setAttribute("data-index", i);
     $(".row").css("background-color","gray");
    
        
     
    // var button = $("<button>");
    // button.attr("class", "btn btn-default");
    // button.text("Complete");

    // li.append(button);
    // liDiv.append(li);
    // todoList.append(liDiv);
   }
}

 function init() {
  // Get stored todos from localStorage
  // Parsing the JSON string to an object
  var storedTodos = JSON.parse(localStorage.getItem("todos"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // Render todos to the DOM
  renderTodos();
 }

// function storeTodos() {
//   // Stringify and set "todos" key in localStorage to todos array
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// // When form is submitted...
// todoForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var todoText = todoInput.value.trim();

//   // Return from function early if submitted todoText is blank
//   if (todoText === "") {
//     return;
//   }

//   // Add new todoText to todos array, clear the input
//   todos.push(todoText);
//   todoInput.value = "";

//   // Store updated todos in localStorage, re-render the list
//   storeTodos();
//   renderTodos();
// });

// // When a element inside of the todoList is clicked...
// $(".row").addEventListener("click", function(event) {
//   var element = event.target;

//   // If that element is a button...
//   if (element.matches("button") === true) {
//     // Get its data-index value and remove the todo element from the list
//     var index = element.parentElement.getAttribute("data-index");
//     todos.splice(index, 1);

//     // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();
//   }
// });
