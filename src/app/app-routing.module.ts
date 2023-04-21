import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ResumeComponent } from './component/resume/resume.component';
import { InterestsComponent } from './component/interests/interests.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { ContactComponent } from './component/contact/contact.component';
import { SubmitMessageComponent } from './component/submit-message/submit-message.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Handling base path, redirects to home
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'interests', component: InterestsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'message', component: SubmitMessageComponent },
  { path: '**', redirectTo: 'home' } // Handling invalid paths, redirects to home
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
