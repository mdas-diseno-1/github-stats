import { Controller } from '@nestjs/common';
import { OrganizationsService } from '../../Infrastructure/Adapters/organizations.service';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}
}
