import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent implements OnInit {
  taskid: number = 0;

  tasks: any = [];

  viewtask: any;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {
  }
  ngOnInit() {
    console.log('ngOnInit');
    this.taskid = this.route.snapshot.params['id'];
    console.log('this.taskId', this.taskid);
    this.tasks = this.taskService.GetTasksList();
    console.log('tasks', this.tasks);
    console.log('this.tasks.length: ', this.tasks.length);
    var selectedTask = this.tasks.find((t: any) => t.id == this.taskid);
    console.log('selectedTask: ', selectedTask);
    this.viewtask = selectedTask;
  }
}

