import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  private endpoint = 'https://jsonplaceholder.typicode.com';

  getUserList() {
    return this.http.get<any>(`${this.endpoint}/users`);
  }
}
