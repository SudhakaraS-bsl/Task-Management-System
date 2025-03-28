import { Routes } from '@angular/router';

// import { HomeComponent } from './features/home/home.component';
// import { LoginComponent } from './features/login/login.component';
// import { SignupComponent } from './features/signup/signup.component';
// import { NotFoundComponent } from './features/not-found/not-found.component';
// import { AboutComponent } from './features/about/about.component';
// import { ContactComponent } from './features/contact/contact.component';

// import { ExperienceComponent } from './features/about/experience/experience.component';
// import { SkillComponent } from './features/about/skill/skill.component';

// import { MailingComponent } from './features/contact/mailing/mailing.component';
// import { MappingComponent } from './features/contact/mapping/mapping.component';
// import { WebsiteComponent } from './features/contact/website/website.component';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

export const routes: Routes = [
  { path: '', component: TaskListComponent, },

  { path: 'tasklist', component: TaskListComponent, },
  { path: 'taskcreate', component: TaskCreateComponent, },
  { path: 'taskview/:id', component: TaskDetailComponent, },
  { path: 'taskedit/:id', component: TaskEditComponent, }

  // { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignupComponent },

  // {
  //   path: 'about', component: AboutComponent,
  //   children: [
  //     { path: '', component: ExperienceComponent },
  //     { path: 'experience', component: ExperienceComponent },
  //     { path: 'skill', component: SkillComponent },
  //   ],
  // },
  // {
  //   path: 'contact', component: ContactComponent,
  //   children: [
  //     { path: '', component: MailingComponent },
  //     { path: 'mailing', component: MailingComponent },
  //     { path: 'mapping', component: MappingComponent },
  //     { path: 'website', component: WebsiteComponent },
  //   ],
  // },

  // { path: '**', component: NotFoundComponent }
];