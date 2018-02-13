import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this._authService.handleAuthentication();
  }

}
