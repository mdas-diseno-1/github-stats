import { Module } from '@nestjs/common';
import { PullRequestReviewsService } from '../Infrastructure/Adapters/pull-request-reviews.service';
import { PullRequestReviewsController } from './pull-request-reviews.controller';

@Module({
  controllers: [PullRequestReviewsController],
  providers: [PullRequestReviewsService],
})
export class PullRequestReviewsModule {}
