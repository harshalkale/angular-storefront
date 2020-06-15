import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '@data/user/user';
import { BehaviorSubject } from 'rxjs';

import { AuthService } from '@app/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit, OnDestroy {
  user$: BehaviorSubject<User>;
  user: User;
  isSidebarOpened = false;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.getLoggedInUser();
  }

  ngOnInit(): void {
    this.user$.subscribe((userData) => {
      this.user = userData;
      this.isSidebarOpened = Boolean(this.user);
    });
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.user$.unsubscribe();
  }
}
