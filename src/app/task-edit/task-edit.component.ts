import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  imports: [RouterLink, RouterOutlet, FormsModule],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent implements OnInit {
  edittask: any;
  constructor(private activatedRoute: ActivatedRoute,
    private taskService: TaskService
  ) {
  }
  ngOnInit(): void {
    var taskid = this.activatedRoute.snapshot.params['id'];
    console.log('taskid: ', taskid);
    var tasks = this.taskService.GetTasksList();
    this.edittask = tasks.find((t: any) => t.id == taskid);
  }
  EditTask(taskid: string) {
    console.log('taskid: ', taskid);
    console.log('this.edittask: ', this.edittask);
    console.log('update to backend database.');

  }
}

