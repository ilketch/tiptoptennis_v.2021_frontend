import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ChisiamoComponent } from './components/chisiamo/chisiamo.component';
import { LesediComponent } from './components/lesedi/lesedi.component';
import { LascuolaComponent } from './components/lascuola/lascuola.component';
import { SummercampComponent } from './components/summercamp/summercamp.component';
import { NewsComponent } from './components/news/news.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { InterceptorService } from './services/interceptor.service';
import { AuthService } from './services/auth.service';
import { ChisiamocarouselComponent } from './components/chisiamocarousel/chisiamocarousel.component';
import { SummercampcarouselComponent } from './components/summercampcarousel/summercampcarousel.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    ChisiamoComponent,
    LesediComponent,
    LascuolaComponent,
    SummercampComponent,
    NewsComponent,
    EditComponent,
    LoginComponent,
    ChisiamocarouselComponent,
    SummercampcarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
    AngularFileUploaderModule,
    JwtModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: JWT_OPTIONS,
    useValue: JWT_OPTIONS,
    },
    JwtHelperService,
    AuthService,
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    LascuolaComponent,
    { 
      provide: LocationStrategy, 
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
