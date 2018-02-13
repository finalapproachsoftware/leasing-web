import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [UserService, AuthService]
})
export class CoreModule { }
