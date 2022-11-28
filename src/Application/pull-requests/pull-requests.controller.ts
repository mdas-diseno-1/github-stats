import { Controller } from '@nestjs/common';
import { PullRequestsService } from '../Infrastructure/Adapters/pull-requests.service';

@Controller('pull-requests')
export class PullRequestsController {
  constructor(private readonly pullRequestsService: PullRequestsService) {}
}
