import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Matches the Review entity in the NestJS backend.
export interface Review {
  id: number;
  poNumber: string;
  status: 'PENDING' | 'IN_REVIEW';
}

@Service()
export class Reviews {
  // Ask Angular for its HTTP client so this service can call the API.
  private readonly http = inject(HttpClient);

  // GET http://localhost:3000/reviews and expect an array of reviews back.
  getReviews() {
    return this.http.get<Review[]>('http://localhost:3000/reviews');
  }
}