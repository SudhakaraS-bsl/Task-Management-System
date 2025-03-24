import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-create',
  imports: [RouterLink, RouterOutlet, FormsModule],
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.css'
})

export class TaskCreateComponent {
  newtask: any = {
    id: 0,
    name: '',
    categories: '',
    priority: '',
    status: ''
  };

  constructor(private taskService: TaskService,
    private activatedRoute: ActivatedRoute
  ) {
    var taskId = this.GenerateTaskId();
    this.newtask = {
      id: taskId,
      name: 'Name' + taskId,
      categories: 'Category1',
      priority: 'Low',
      status: 'New'
    };
  }

  AddNewTask() {
    console.log('this.newtask: ', this.newtask);
    this.taskService.AddTask(this.newtask);
    //this.activatedRoute.navigate(['/details', id])
  }

  GenerateTaskId() {
    var tasks = this.taskService.GetTasksList();
    console.log('tasks: ', tasks);
    let objMax = tasks.reduce((max: any, current: any) => max.id > current.id ? max : current);
    console.log('objMax: ', objMax.id + 1);
    return objMax.id + 1;
  }
}
