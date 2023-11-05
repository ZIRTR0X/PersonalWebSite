import { Component } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-dark-mode-toggle-button',
  templateUrl: './dark-mode-toggle-button.component.html',
  styleUrls: ['./dark-mode-toggle-button.component.css'],
})
export class DarkModeToggleButtonComponent {
  constructor(private navbarService: NavbarService) {}

  public clickToggleSwicth(poEvent: Event): void {
    this.navbarService.clickToggleSwicth(poEvent);
  }
}
