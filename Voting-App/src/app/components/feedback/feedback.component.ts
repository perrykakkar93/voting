import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackServiceService } from '../../services/feedback/feedback-service.service'; 
import { AuthService } from '../../services/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup = this.fb.group({
    rating: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });
  isVoter: boolean = false; 

  constructor(
    private fb: FormBuilder,
    private feedbackService: FeedbackServiceService,
    private authService: AuthService ,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.feedbackForm = this.fb.group({
      rating: ['', Validators.required],
      message: ['', Validators.required]
    });

    this.isVoter = this.authService.isVoter();
  }

  submitFeedback() {
    // Additional check to ensure only voters can submit feedback
    if (this.isVoter) {
      const formData = this.feedbackForm.value;

      this.feedbackService.submitFeedback(formData).subscribe(
        response => {
          // Handle success
          console.log('Feedback submitted successfully:', response);
        },
        error => {
          // Handle error
          console.error('Error submitting feedback:', error);
          this.router.navigate(['/home']);
        }
      );
    } else {
      console.warn('Only voters can submit feedback.');
    }
  }
  isFormValid(): boolean {
    return this.feedbackForm.valid;
  }
  
}
