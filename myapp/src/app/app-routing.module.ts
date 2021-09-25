import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomplishmentsComponent } from './accomplishments/accomplishments.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'timeline', component: TimelineComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'accomplishments', component: AccomplishmentsComponent},
  {path: 'contact-us', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
