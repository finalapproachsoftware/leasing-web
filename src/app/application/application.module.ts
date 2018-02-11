import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { ApplicationRoutingModule } from './/application-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ApplicationRoutingModule
  ],
  declarations: [StartComponent]
})
export class ApplicationModule { }
