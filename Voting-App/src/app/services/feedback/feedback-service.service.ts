import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  submitFeedback(feedbackData: any): Observable<any> {
    const url = `${this.apiUrl}/api/feedback`;
    return this.http.post(url, feedbackData);
  }
}
