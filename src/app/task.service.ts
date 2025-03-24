import { Injectable } from '@angular/core';
import { Tasks } from './db-data';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasksList: any = Tasks;
  constructor() { }

  GetTasksList() {
    return this.tasksList;
  }
  AddTask(task: any) {
    this.tasksList.push(task)
  }
}
