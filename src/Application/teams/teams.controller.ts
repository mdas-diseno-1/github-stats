import { Controller } from '@nestjs/common';
import { TeamsService } from '../Infrastructure/Adapters/teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}
}
