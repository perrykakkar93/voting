import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Voting-App';
  constructor(private router: Router) { }

  logIn() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
  register() {
    sessionStorage.clear();
    this.router.navigate(['register']);
  }
  feedback() {
    sessionStorage.clear();
    this.router.navigate(['feedback']);
  }
}
