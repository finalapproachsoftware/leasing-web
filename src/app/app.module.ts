import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ApplicationModule } from './application/application.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './/app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AuthCallbackComponent
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
