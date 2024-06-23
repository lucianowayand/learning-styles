import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserEntity } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() user: CreateUserDTO): Promise<UserEntity> {
    const newUser = await this.usersService.createUser(user);

    return newUser;
  }

  @Post('login')
  login(
    @Body() payload: { username: string; password: string },
  ): Promise<{ authToken: string }> {
    return this.usersService.login(payload.username, payload.password);
  }
}
