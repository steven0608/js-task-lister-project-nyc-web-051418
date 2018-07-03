var store = {lists:[],tasks:[],taskListers:[]};
var listId=0
class List{
  constructor(name){
    this.id = ++listId
    this.name = name
    store.lists.push(this)
    console.log(store.lists)
  }
}

var taskId=0
class Task {
  constructor(description,priority,list) {
    this.id = ++taskId
    this.name = list
    this.description=description
    this.priority=priority

    store.tasks.push(this)
  }
}
