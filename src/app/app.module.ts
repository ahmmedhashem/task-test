import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { FooterComponent } from './Home/footer/footer.component';
import { TestimonialsComponent } from './Home/testimonials/testimonials.component';
import { ProgramComponent } from './Home/program/program.component';
import { AboutComponent } from './Home/about/about.component';
import { GallaryComponent } from './Home/gallary/gallary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TestimonialsComponent,
    ProgramComponent,
    AboutComponent,
    GallaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
