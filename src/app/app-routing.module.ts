import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ChisiamoComponent } from './components/chisiamo/chisiamo.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { LascuolaComponent } from './components/lascuola/lascuola.component';
import { LesediComponent } from './components/lesedi/lesedi.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { SummercampComponent } from './components/summercamp/summercamp.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'chisiamo', component: ChisiamoComponent },
  { path: 'lesedi', component: LesediComponent },
  { path: 'lascuola', component: LascuolaComponent },
  { path: 'summercamp', component: SummercampComponent },
  { path: 'news', component: NewsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit', component: EditComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: '**', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
