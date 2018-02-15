import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class SharedModule { }
