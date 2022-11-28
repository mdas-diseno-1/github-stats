import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PullRequestsModule } from './pull-requests/pull-requests.module';
import { PullRequestReviewsModule } from './pull-request-reviews/pull-request-reviews.module';
import { ReviewCommentsModule } from './review-comments/review-comments.module';
import { MetricsModule } from './metrics/metrics.module';
import { UsersModule } from './users/users.module';
import { OrganizationsModule } from './Application/organizations/organizations.module';
import { TeamsModule } from './teams/teams.module';

@Module({
  imports: [
    PullRequestsModule,
    PullRequestReviewsModule,
    ReviewCommentsModule,
    MetricsModule,
    UsersModule,
    OrganizationsModule,
    TeamsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
