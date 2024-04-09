import { Component } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[] = [
    new Task ("Solo Leveling")
   ];
   
   add(newTask: string ){
    this.tasks.push(new Task(newTask));
   }
   remove(item:Task){
     var userConfirmed =confirm(`Are you sure about this Oni Chan? \n "${item.title}"`)
     if(userConfirmed){
       this.tasks = this.tasks.filter(task => task != item);
     }
   }
   
   }
   
  class Task {
  
    constructor(public title: string){
  
    }
    
    toggleIsDone(){
  
    this.isDone = !this.isDone;
  }
    public isDone = false;
}