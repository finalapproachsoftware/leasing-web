import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  isAuthenticated: boolean = false;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this.isAuthenticated = this._authService.isAuthenticated();
    console.log(this.isAuthenticated);
  }

  login(): void {
    console.log('logging in now...')
    this._authService.login();
  }

}
