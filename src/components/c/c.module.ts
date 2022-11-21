import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CComponent } from './c.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CComponent],
  imports: [
    CommonModule
    FormsModule
  ]
})
export class CModule { }
