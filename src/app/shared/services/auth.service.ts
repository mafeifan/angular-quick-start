import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
  ) { }

  static isLoggedIn() {
    return LocalStorageService.getItem('AuthToken');
  }

  login(data) {
    return of({
      success: true,
      data: {
        AuthenticationToken: 'abcd'
      }
    })
    .pipe(delay(1500));
  }

  logOut() {
    LocalStorageService.clear();
    this.router.navigate(['/login']);
  }
}
