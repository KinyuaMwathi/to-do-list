Describe: ToDoListItems()

Test: "It will create an object with certain properties in each initialization of the constructor."
Code: new ToDoListItems("21-05-2021", "7:00 a.m - 8:00 a.m", "Data Structures and Algorithms", "Work on toy problems.");
Expected Output: ToDoListItems {date: "21-05-2021", timeSpan: "7:00 a.m - 8:00 a.m", task: "Data Structures and Algorithms", taskDescription: "Work on toy problems."}

Describe: toDoListItemsCollection()

Test: "It will store to do list objects and also show the id of each object."
Code: 
let toDoListItemsCollection = new ToDoListItemsCollection();
let toDoListItems01 = new ToDoListItems("21-05-2021", "7:00 a.m - 8:00 a.m", "Data Structures and Algorithms", "Work on toy problems.");
toDoListItemsCollection.addToDoListItems(toDoListItems01);
toDoListItemsCollection;
Expected Output: 
ToDoListItemsCollection {toDoListItems: {…}, currentId: 1}
 currentId: 1
 toDoListItems:
  1: ToDoListItems {date: "21-05-2021", timeSpan: "7:00 a.m - 8:00 a.m", task: "Data Structures and Algorithms", taskDescription: "Work on toy problems.", id: 1}
   __proto__: Object
 __proto__: Object  
