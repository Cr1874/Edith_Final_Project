import { Routes } from '@angular/router';
import { ReviewsPage } from './reviews-page/reviews-page';

export const routes: Routes = [
    // The default route, which shows the reviews page.
    { path: '', component: ReviewsPage }
];
