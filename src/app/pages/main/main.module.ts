import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MaterialModule } from '../../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
