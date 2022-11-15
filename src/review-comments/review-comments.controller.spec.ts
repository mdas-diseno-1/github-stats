import { Test, TestingModule } from '@nestjs/testing';
import { ReviewCommentsController } from './review-comments.controller';
import { ReviewCommentsService } from './review-comments.service';

describe('ReviewCommentsController', () => {
  let controller: ReviewCommentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewCommentsController],
      providers: [ReviewCommentsService],
    }).compile();

    controller = module.get<ReviewCommentsController>(ReviewCommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
