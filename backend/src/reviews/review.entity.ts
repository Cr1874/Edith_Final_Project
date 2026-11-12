import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Keep the same two statuses used by the current review endpoint.
export type ReviewStatus = 'PENDING' | 'IN_REVIEW';

// Map this class to a database table called "reviews".
@Entity('reviews')
export class Review {
  // PostgreSQL generates a unique number for each new review.
  @PrimaryGeneratedColumn()
  id: number;

  // Store the purchase-order reference as text.
  @Column({ type: 'text' })
  poNumber: string;

  // Restrict the database column to the supported statuses.
  @Column({
    type: 'enum',
    enum: ['PENDING', 'IN_REVIEW'],
    default: 'PENDING',
  })
  status: ReviewStatus;
}