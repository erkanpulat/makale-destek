import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequest, HttpEvent, HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  upload(fb: FormGroup): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', fb.get('file').value);
    formData.append('customerNameSurname', fb.get('customerNameSurname').value);
    formData.append('customerPhoneNumber', fb.get('customerPhoneNumber').value);
    formData.append('customerEmail', fb.get('customerEmail').value);
    formData.append('orderType', fb.get('orderType').value);
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

}
