import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  // You can create functions in your HeaderComponent to navigate to different routes
  navigateToHome() {
    this.router.navigate(['/home']);
  }
  navigateToMovies() {
    this.router.navigate(['/movies']);
  }
  navigateToTrailers() {
    this.router.navigate(['/trailers']);
  }
  navigateToCart() {
    this.router.navigate(['/cart']);
  }
  navigateToSignIn() {
    this.router.navigate(['/sign-in']);
  }
  navigateToAbout() {
    this.router.navigate(['/about']);
  }
  navigateToSettings() {
    this.router.navigate(['/settings']);
  }
  navigateToSeries() {
    this.router.navigate(['/series']);
  }
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
  navigateToMusic() {
    this.router.navigate(['/music']);
  }
}
