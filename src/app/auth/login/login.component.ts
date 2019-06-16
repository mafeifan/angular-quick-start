import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.checkLogin();
    this.initFormBuilder();
  }

  checkLogin() {
    if (AuthService.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    }
  }

  initFormBuilder() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    // stop if form invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.auth.login(this.loginForm.value)
      .subscribe(response => {
        console.log(response);
        LocalStorageService.setItem('AuthToken', response.data.AuthenticationToken);
        this.router.navigate(['dashboard']);
      }, error => {
        this.loading = false;
      });
  }
}
