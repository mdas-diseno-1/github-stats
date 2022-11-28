import { Test, TestingModule } from '@nestjs/testing';
import { PullRequestReviewsService } from '../Infrastructure/Adapters/pull-request-reviews.service';

describe('PullRequestReviewsService', () => {
  let service: PullRequestReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PullRequestReviewsService],
    }).compile();

    service = module.get<PullRequestReviewsService>(PullRequestReviewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
