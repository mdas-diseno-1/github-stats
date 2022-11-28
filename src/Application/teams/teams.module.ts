import { Module } from '@nestjs/common';
import { TeamsService } from '../Infrastructure/Adapters/teams.service';
import { TeamsController } from './teams.controller';

@Module({
  controllers: [TeamsController],
  providers: [TeamsService],
})
export class TeamsModule {}
