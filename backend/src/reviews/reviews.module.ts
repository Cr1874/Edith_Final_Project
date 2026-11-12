import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './review.entity.js';
import { ReviewsController } from './reviews.controller.js';
import { ReviewsService } from './reviews.service.js';

@Module({
  // Make the Review database repository available within this module.
  imports: [TypeOrmModule.forFeature([Review])],
  providers: [ReviewsService],
  controllers: [ReviewsController],
})
export class ReviewsModule {}