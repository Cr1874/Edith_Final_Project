import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

type Review = {
  id: number;
  poNumber: string;
  status: 'PENDING' | 'IN_REVIEW';
};

@Injectable()
export class ReviewsService {
    // Mock data for demonstration purposes
  private review: Review = {
    id: 1,
    poNumber: 'PO-1001', // Example purchase order number
    status: 'PENDING',
  };

  findOne(id: number): Review {
    if (id !== this.review.id) { // Check if the requested review ID matches the mock data
      throw new NotFoundException(`Review ${id} not found`);
    }

    return this.review;
  }

  // Update the review with the provided purchase order number and status
  update(id: number, poNumber: unknown, status: unknown): Review {
    const review = this.findOne(id);

    if (typeof poNumber !== 'string' || poNumber.trim() === '') {
      throw new BadRequestException('Enter a purchase-order number');
    }

    if (status !== 'PENDING' && status !== 'IN_REVIEW') {
      throw new BadRequestException('Status must be PENDING or IN_REVIEW');
    }

    this.review = { ...review, poNumber: poNumber.trim(), status };
    return this.review;
  }
}