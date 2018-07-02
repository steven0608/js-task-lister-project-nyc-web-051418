

document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
const selectList = document.getElementById("parent-list");
const listDiv = document.getElementById("app-content");
var createTask=document.getElementById('createTask')
createTask.addEventListener("click",function (event) {
  event.preventDefault()
  const newTaskDesc=document.getElementById("new-task-description").value;
  const newTaskProi=document.getElementById("new-task-priority").value;

newList=selectList.options[selectList.selectedIndex].innerText
  var task=new Task(newTaskDesc,newTaskProi,newList)
  var documentList = document.getElementById("lists")

    var taskListHTML = `<div id=${task.name}Button>
      <h2>${task.name}
        <button data-title=${task.name} class="delete-list">
          X
        </button>
      </h2>
      <ul id="taskLists">

      </ul>
    </div>`
    store.lists.forEach(list=>{
      var taskList=`<div id=${list.name}Button>
        <h2>${list.name}
          <button data-title=${list.name} class="delete-list">
            X
          </button>
        </h2>
        <ul id="taskLists">

        </ul>
      </div>`
      documentList.innerHTML += taskList
    })
      // documentList.innerHTML = taskListHTML;
      // store.lists.find(list=>{debugger;})

      document.getElementById("taskLists").innerHTML =" "
debugger;
      store.tasks.forEach(function (task) {

          var li=`<li>
          Task: ${task.description}
          <button data-list-title=${task.name} data-task-name=${task.description} class="delete-task">
              X
          </button>
          <br>
          Priority: ${task.priority}
        </li>`
        document.getElementById("taskLists").innerHTML +=li
      })

})

  // const app = new TaskLister();
const form_submit=document.getElementById('submit');
form_submit.addEventListener("click",function (event) {
  event.preventDefault()
  const newListInput= document.getElementById('new-list-title').value;

  var newList=new List(newListInput)





const options = document.createElement("OPTION");
  store.lists.forEach(function(item){
  selectList.appendChild(options);
  options.innerText =  item.name;
  options.selected = item.name;


})



})


});
