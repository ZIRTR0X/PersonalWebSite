import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeToggleButtonComponent } from './dark-mode-toggle-button.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DarkModeToggleButtonComponent],
  imports: [CommonModule, MatIconModule],
  exports: [DarkModeToggleButtonComponent],
})
export class DarkModeToggleButtonModule {}
