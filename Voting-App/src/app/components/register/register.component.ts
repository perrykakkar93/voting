import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      
      const user = { ...this.registrationForm.value, role: 'Voter' };

      this.userService.registerUser(user).subscribe(
        (response) => {
        console.log('Registration successful:', response);
        alert('Signup successful! Please login using your email and password.');
        this.router.navigate(['/login']);
        },
        error => {
          console.error('Registration failed:', error);
        }
      );
    }
  }
}
