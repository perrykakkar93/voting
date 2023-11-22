import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login(): void {

    if (this.loginForm.valid) {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        if (response.role === 'admin') {
          this.router.navigate(['/admin']);
        } else if (response.role === 'voter') {
          this.router.navigate(['/voter']);
        } else {
          console.error('No User Role Found!!!');
        }
      },
      (error) => {
        console.error('Login failed', error);
      
      }
    );
  }}
}
