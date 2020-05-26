import { NgModule } from '@angular/core';

import { ResumeRoutingModule } from './resume-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ResumeComponent } from './resume.component';
import { HomeComponent } from './components/home/home.component';
import { WorksComponent } from './components/works/works.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [ResumeComponent, HomeComponent, WorksComponent, ContactComponent, AboutComponent],
  imports: [
    SharedModule,
    ResumeRoutingModule
  ]
})
export class ResumeModule { }
