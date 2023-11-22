import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AdminComponent } from './components/admin/admin.component';
import { VoterComponent } from './components/voter/voter.component';
import { ElectionComponent } from './components/election/election.component';
import { ResultsComponent } from './components/results/results.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { CreateElectionComponent } from './components/create-election/create-election.component';
import { VoterElectionComponent } from './components/voter-election/voter-election.component';
import { VoterListComponent } from './components/voter-list/voter-list.component';
import { AuthService } from './services/auth.service';
import { FeedbackServiceService } from './services/feedback/feedback-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FeedbackComponent,
    AdminComponent,
    VoterComponent,
    ElectionComponent,
    ResultsComponent,
    ProfilesComponent,
    CreateElectionComponent,
    VoterElectionComponent,
    VoterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [MessageService, AuthService, FeedbackServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
