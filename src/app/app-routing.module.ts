import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'auth', component: AuthCallbackComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
