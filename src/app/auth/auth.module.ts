import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    AuthRoutingModule,
    SharedModule,
  ],
  declarations: [
    LoginComponent,
  ],
  entryComponents: [
  ]
})
export class AuthModule { }
