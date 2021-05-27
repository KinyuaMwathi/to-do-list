// Business Logic

function ToDoListItemsCollection() {
  this.toDoListItems = {};
  this.currentId = 0;
}

ToDoListItemsCollection.prototype.addToDoListItems = function(toDoListItems) {
  toDoListItems.id = this.assignId();
  this.toDoListItems[toDoListItems.id] = toDoListItems;
}

ToDoListItemsCollection.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function ToDoListItems(date, timeSpan, task, taskDescription) {
  this.date = date;
  this.timeSpan = timeSpan;
  this.task = task;
  this.taskDescription = taskDescription;
}