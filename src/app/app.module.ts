import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { StickyHeaderComponent } from './components/sticky-header/sticky-header.component';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { WelcomeSectionImageComponent } from './components/welcome-section-image/welcome-section-image.component';
import { LivestreamGalleryComponent } from './components/livestream-gallery/livestream-gallery.component';
import { QuestionAnswerSectionComponent } from './components/question-answer-section/question-answer-section.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StickyHeaderComponent,
    SliderComponent,
    WelcomeSectionComponent,
    WelcomeSectionImageComponent,
    LivestreamGalleryComponent,
    QuestionAnswerSectionComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
