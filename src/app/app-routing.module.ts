import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'auth', component: AuthCallbackComponent},
      {path: 'profile', component: ProfileComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
