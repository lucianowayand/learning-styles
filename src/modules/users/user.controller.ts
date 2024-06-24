import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserEntity } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  async createUser(@Body() user: CreateUserDTO): Promise<UserEntity> {
    const newUser = await this.usersService.createUser(user);

    return newUser;
  }

  @Post('login')
  login(
    @Body() payload: { email: string; password: string },
  ): Promise<{ authToken: string }> {
    return this.usersService.login(payload.email, payload.password);
  }
}
