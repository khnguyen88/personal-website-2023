import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { ResumeComponent } from './component/resume/resume.component';
import { InterestsComponent } from './component/interests/interests.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';

import { NgbCollapseModule, NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubmitMessageComponent } from './component/submit-message/submit-message.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ResumeComponent,
    InterestsComponent,
    ProjectsComponent,
    GalleryComponent,
    ContactComponent,
    HomeComponent,
    SubmitMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCollapseModule,
    NgbCarouselModule,
    FontAwesomeModule,
    ReactiveFormsModule

    
  ],
  providers: [
    NgbCarouselConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
