import { Controller } from '@nestjs/common';
import { UsersService } from '../Infrastructure/Adapters/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
