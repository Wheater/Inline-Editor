import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatSelectModule, MatDatepickerModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule
  ],
  exports: [
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule
  ]
})
export class AngularMaterialModule { }
