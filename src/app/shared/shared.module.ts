import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material/material.module';

const MODULES = [
  CommonModule,
  ReactiveFormsModule,
  MaterialModule,
  RouterModule
];

@NgModule({
  imports: [...MODULES]
})
export class SharedModule {}
