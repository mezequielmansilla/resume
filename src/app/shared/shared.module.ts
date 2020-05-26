import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { IconComponent } from './components/icon/icon.component';

const components = [IconComponent];
@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ...components,
  ]
})
export class SharedModule { }
