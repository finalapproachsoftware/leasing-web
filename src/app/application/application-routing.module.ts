import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'application/start', component: StartComponent}
    ])
  ],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
