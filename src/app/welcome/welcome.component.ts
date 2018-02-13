import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  isAuthenticated: boolean = false;
  access_token: string;
  id_token: string;
  expires_at: string;
  userProfile: any;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this.isAuthenticated = this._authService.isAuthenticated();
    console.log(this.isAuthenticated);
    
    if(this.isAuthenticated) {
      this.access_token = localStorage.getItem('access_token');
      this.id_token = localStorage.getItem('id_token');
      this.expires_at = localStorage.getItem('expires_at');

      this._authService.getProfile((err, profile) => {
        this.userProfile = profile;
        console.log('called back');
      });
    }
  }

  login(): void {
    console.log('logging in now...')
    this._authService.login();
  }

  logout(): void {
    console.log('logging out now...')
    this._authService.logout();
    this.isAuthenticated = this._authService.isAuthenticated();
    console.log(this.isAuthenticated);
  }

}
