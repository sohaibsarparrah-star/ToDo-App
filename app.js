const input = document.querySelector("#input");
const ol = document.querySelector("ol");
const allTodos =[];

function renderTodo(){
    ol.innerHTML = "";
    for(let i = 0; i < allTodos.length; i++){
        ol.innerHTML += `<li>${allTodos[i]}
        <button onclick = "deleteTodo(${i})">delete</button>
        <button onclick = "editTodo(${i})">Edit</button>
        </li>`
    }
}
function addTodo(){
    allTodos.push(input.value);
    renderTodo()
    input.value = "";
}
function deleteTodo(index){
    console.log("delete todo" , index, allTodos[index]);
    allTodos.splice(index, 1);
    renderTodo ()
    
}
function editTodo(index){
    console.log("edit todo" , index, allTodos[index]);
    const updatedValue = prompt("enter updated value" , allTodos[index]);
    allTodos.splice(index , 1 , updatedValue);
    renderTodo()
    
}
