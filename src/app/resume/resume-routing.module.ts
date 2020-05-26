import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumeComponent } from './resume.component';
import { ResumeRoutesEnum } from './enums/resume-routes.enum';
import { HomeComponent } from './components/home/home.component';
import { WorksComponent } from './components/works/works.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: ResumeRoutesEnum.HOME,
    pathMatch: 'full',
  },
  {
    path: '',
    component: ResumeComponent,
    children: [
      {
        path: ResumeRoutesEnum.HOME,
        component: HomeComponent,
      },
      {
        path: ResumeRoutesEnum.WORKS,
        component: WorksComponent,
      },
      {
        path: ResumeRoutesEnum.CONTACT,
        component: ContactComponent,
      },
      {
        path: ResumeRoutesEnum.ABOUT,
        component: AboutComponent,
      }
    ]
  },
  {
    path: '**',
    redirectTo: ResumeRoutesEnum.HOME,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeRoutingModule { }
