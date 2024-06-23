import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserEntity } from './user.entity';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UserService);
    createUser(user: CreateUserDTO): Promise<UserEntity>;
    login(payload: {
        username: string;
        password: string;
    }): Promise<{
        authToken: string;
    }>;
}
