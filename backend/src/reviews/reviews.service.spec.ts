import { vi } from 'vitest';
import { ReviewsService } from './reviews.service.js';

describe('ReviewsService', () => {
  it('returns the review when it exists', async () => {
    // Fake review object to be returned by the fake repository.
    const review = { id: 1, poNumber: 'PO-1001', status: 'PENDING' };

    // Fake repository whose findOneBy always returns that review.
    const fakeRepository = {
      findOneBy: vi.fn().mockResolvedValue(review),
    };

    // Create the service directly with the fake repository.
    const service = new ReviewsService(fakeRepository as any);

    // Call the method and check the result.
    const result = await service.findOne(1);
    expect(result).toEqual(review);
  });
});