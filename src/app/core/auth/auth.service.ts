import { Injectable } from '@angular/core';
import { User } from '@data/user/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userData$: BehaviorSubject<User | null> = new BehaviorSubject(null);

  get userData() {
    return this.userData$.value;
  }

  set userData(user: User) {
    this.userData$.next(user);
  }

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      this.userData = user;
      if (user) {
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  // get User Data
  getLoggedInUser() {
    return this.userData$;
  }

  // Sign in with email/password
  login(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Sign out
  logout() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/admin/login']);
    });
  }
}
