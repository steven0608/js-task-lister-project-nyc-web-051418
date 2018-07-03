

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

    // var taskListHTML = `<div id=${task.name}Button>
    //   <h2>${task.name}
    //     <button data-title=${task.name} class="delete-list">
    //       X
    //     </button>
    //   </h2>
    //   <ul id="taskLists">
    //
    //   </ul>
    // </div>`
    documentList.innerHTML= " "
    store.lists.forEach(list=>{
      var taskList=`<div id=${list.name}Button>
        <h2>${list.name}
          <button id=${list.name}Delete data-title=${list.name} class="delete-list">
            X
          </button>
        </h2>
        <ul id=${list.name}>

        </ul>
      </div>`
      documentList.innerHTML += taskList
      // debugger;
    })
      // documentList.innerHTML = taskListHTML;
      // store.lists.find(list=>{debugger;})

      // document.getElementById("taskLists").innerHTML =" "
// debugger;
      store.tasks.forEach(function (task) {
        // debugger;
          var li=`<li class=${task.name}+${task.description}+${task.priority}+${task.id}>
          Task: ${task.description}
          <button id=${task.name}+${task.description}+${task.priority}+${task.id} data-list-title=${task.name} data-task-name=${task.description} class="delete-task">
              X
          </button>
          <br>
          Priority: ${task.priority}
        </li>`
// debugger;
        document.getElementById(task.name).innerHTML +=li

      })

      store.lists.forEach(function (list) {
        console.log("i am in")
        var listButton=document.getElementById(`${list.name}`+"Button")
        var listDelete=document.getElementById(`${list.name}`+"Delete")
        // debugger;

        listDelete.addEventListener("click",function (event) {
          event.preventDefault()
          listButton.remove()


    })
    // list={}
    // debugger;
      })

      store.tasks.forEach(function (task) {
        console.log("i am in the list")
        // debugger;
        var listButton=document.getElementsByClassName(`${task.name}+${task.description}+${task.priority}+${task.id}`)[0]
        var listDelete=document.getElementById(`${task.name}+${task.description}+${task.priority}+${task.id}`)
        // debugger;

        listDelete.addEventListener("click",function (event) {
          event.preventDefault()
          listButton.remove()


    })

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


// debugger;

});
