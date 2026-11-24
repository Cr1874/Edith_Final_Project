import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';
import { Review } from './review.entity.js';

@Injectable()
export class ReviewsService {
  constructor(
    // Nest provides the repository used to read and save review records.
    @InjectRepository(Review)
    private readonly reviewsRepository: Repository<Review>,
  ) {}

  async findOne(id: number): Promise<Review> {
    // Wait for PostgreSQL to find the requested review.
    const review = await this.reviewsRepository.findOneBy({ id });

    if (!review) {
      throw new NotFoundException(`Review ${id} not found`);
    }

    return review;
  }

  async update(
    id: number,
    poNumber: unknown,
    status: unknown,
  ): Promise<Review> {
    // Check that the review exists before changing it.
    const review = await this.findOne(id);

    // Request data must be checked before it is saved.
    if (typeof poNumber !== 'string' || poNumber.trim() === '') {
      throw new BadRequestException('Enter a purchase-order number');
    }

    if (status !== 'PENDING' && status !== 'IN_REVIEW') {
      throw new BadRequestException('Status must be PENDING or IN_REVIEW');
    }

    // Apply only the fields that this endpoint allows users to change.
    review.poNumber = poNumber.trim();
    review.status = status;

    // Write the changes to PostgreSQL so they survive a backend restart.
    return this.reviewsRepository.save(review);
  }

  async findAll(): Promise<Review[]> {
    // Return every review, oldest first, so the list order is predictable.
    return this.reviewsRepository.find({ order: { id: 'ASC' } });
  }
}
