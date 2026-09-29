import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ProgramsComponent } from './pages/programs/programs';
import { LearningSystemComponent } from './pages/learning-system/learning-system';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'learning-system', component: LearningSystemComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
