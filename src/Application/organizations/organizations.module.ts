import { Module } from '@nestjs/common';
import { OrganizationsService } from '../../Infrastructure/Adapters/organizations.service';
import { OrganizationsController } from './organizations.controller';

@Module({
  controllers: [OrganizationsController],
  providers: [OrganizationsService],
})
export class OrganizationsModule {}
