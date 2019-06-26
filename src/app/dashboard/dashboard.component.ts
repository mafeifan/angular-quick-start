import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userList$: Observable<any>;

  constructor(
    private userService: UserService,
  ) { }

  dialogReplaceRemoteCtrl = false;

  ngOnInit() {
    this.userList$ = this.userService.getUserList();
  }

  onShow() {
    this.dialogReplaceRemoteCtrl = true;
  }

}
