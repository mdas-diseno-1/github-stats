import { Controller } from '@nestjs/common';
import { ReviewCommentsService } from '../Infrastructure/Adapters/review-comments.service';

@Controller('review-comments')
export class ReviewCommentsController {
  constructor(private readonly reviewCommentsService: ReviewCommentsService) {}
}
