import { Body, Controller, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { ReviewsService } from './reviews.service.js';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reviewsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body('poNumber') poNumber: unknown,
    @Body('status') status: unknown,
  ) {
    return this.reviewsService.update(id, poNumber, status);
  }
}