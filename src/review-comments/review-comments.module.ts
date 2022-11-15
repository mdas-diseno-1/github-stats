import { Module } from '@nestjs/common';
import { ReviewCommentsService } from './review-comments.service';
import { ReviewCommentsController } from './review-comments.controller';

@Module({
  controllers: [ReviewCommentsController],
  providers: [ReviewCommentsService],
})
export class ReviewCommentsModule {}
