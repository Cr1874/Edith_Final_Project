import { Component, OnInit, inject, signal } from '@angular/core';
import { Review, Reviews } from '../reviews';

@Component({
  selector: 'app-reviews-page',
  imports: [],
  templateUrl: './reviews-page.html',
  styleUrl: './reviews-page.css',
})
export class ReviewsPage implements OnInit {
  // The service that calls the NestJS API.
  private readonly reviewsApi = inject(Reviews);

  // Page state: the data, whether it's still loading, and any error message.
  protected readonly reviews = signal<Review[]>([]);
  protected readonly loading = signal(true);
  protected readonly error = signal<string | null>(null);

  // Runs once when the page first appears: fetch the reviews.
  ngOnInit() {
    this.reviewsApi.getReviews().subscribe({
      next: (data) => {
        this.reviews.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Could not load reviews. Is the backend running?');
        this.loading.set(false);
      },
    });
  }
}