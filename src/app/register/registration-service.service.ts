import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {
  private apiUrl = 'https://672d886cfd8979715642b3c4.mockapi.io/users'; // Replace with your mock API endpoint

  constructor(private http: HttpClient) {}

  registerUser(data: { name: string; email: string; phone: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  checkPhoneNumber(phone: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?phone=${phone}`);
  }
}
