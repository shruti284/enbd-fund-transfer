import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { MaterialUIModule } from '../shared/material-ui.module';

@NgModule({
  imports: [CommonModule, MaterialUIModule],
  declarations: [LoginComponent],
})
export class LoginModule {}
