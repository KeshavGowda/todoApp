import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskDesc = '';
  taskCounter = 0;

  openTasks = new Map();
  completedTasks = new Map();  
  
  constructor() { 
    this.openTasks.set(this.taskCounter++, "Test 1");
    this.openTasks.set(this.taskCounter++, "Test 2");
  }

  ngOnInit(): void {
  }

  createNewTask(taskDesc : string) {
    this.openTasks.set(this.taskCounter++, taskDesc);
    this.taskDesc = '';
  }

  moveToCompleted(taskid : number) {
    this.completedTasks.set(taskid, this.openTasks.get(taskid));
    this.openTasks.delete(taskid);
  }

  moveToOpen(taskid : number) {
    this.openTasks.set(taskid, this.completedTasks.get(taskid));
    this.completedTasks.delete(taskid);
  }

  deleteTask(taskid : number) {
    this.openTasks.delete(taskid);
    this.completedTasks.delete(taskid);
  }

}
