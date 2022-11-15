import { Controller } from '@nestjs/common';
import { ReviewCommentsService } from './review-comments.service';

@Controller('review-comments')
export class ReviewCommentsController {
  constructor(private readonly reviewCommentsService: ReviewCommentsService) {}
}
