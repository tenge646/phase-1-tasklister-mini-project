
  // your code here
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
    
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
      const taskDescriptionInput = document.getElementById("new-task-description");
      const taskDescription = taskDescriptionInput.value;
      const taskItem = document.createElement("li");
      
      taskItem.textContent = taskDescription;
      
      const deleteButton = document.createElement("button");
      
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function() {
        taskItem.remove(); 
      });
     
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
      taskDescriptionInput.value = "";
      taskDescriptionInput.focus();
    });
  });
  




