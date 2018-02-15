import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app/app.component';
import { ApplicationModule } from './modules/application/application.module';
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';
import { AppRoutingModule } from './/app-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AuthCallbackComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    ApplicationModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
