import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { VoterComponent } from './components/voter/voter.component';
import { AdminComponent } from './components/admin/admin.component';
import { VoterElectionComponent } from './components/voter-election/voter-election.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ResultsComponent } from './components/results/results.component';
import { VoterListComponent } from './components/voter-list/voter-list.component';
import { CreateElectionComponent } from './components/create-election/create-election.component';
import { ElectionComponent } from './components/election/election.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'feedback', component: FeedbackComponent},  
  { path: 'admin', component: AdminComponent },
  { path: 'voter', component: VoterComponent },
  { path: 'voter-election', component: VoterElectionComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'voter-list', component: VoterListComponent },
  { path: 'create-election', component: CreateElectionComponent },
  { path: 'election', component: ElectionComponent },
 
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
