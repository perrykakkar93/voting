import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    const registerUrl = `${this.apiUrl}/register`; // Update with your registration API endpoint
    return this.http.post(registerUrl, user);
  }

  // Add other user-related methods as needed (e.g., login, get user details, etc.)
}
