import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { DarkModeToggleButtonModule } from '../dark-mode-toggle-button/dark-mode-toggle-button.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, DarkModeToggleButtonModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
