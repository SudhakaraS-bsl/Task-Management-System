import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasklist: any = [];
  constructor(taskService: TaskService) {
    this.tasklist = taskService.GetTasksList();
  }
  ngOnInit(): void {
    console.log('ngOnInit() fired.');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy() fired.');
  }
}
