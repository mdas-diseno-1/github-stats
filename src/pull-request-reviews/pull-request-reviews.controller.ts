import { Controller } from '@nestjs/common';
import { PullRequestReviewsService } from './pull-request-reviews.service';

@Controller('pull-request-reviews')
export class PullRequestReviewsController {
  constructor(
    private readonly pullRequestReviewsService: PullRequestReviewsService,
  ) {}
}
