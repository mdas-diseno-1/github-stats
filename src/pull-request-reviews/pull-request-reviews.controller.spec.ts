import { Test, TestingModule } from '@nestjs/testing';
import { PullRequestReviewsController } from './pull-request-reviews.controller';
import { PullRequestReviewsService } from './pull-request-reviews.service';

describe('PullRequestReviewsController', () => {
  let controller: PullRequestReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PullRequestReviewsController],
      providers: [PullRequestReviewsService],
    }).compile();

    controller = module.get<PullRequestReviewsController>(
      PullRequestReviewsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
