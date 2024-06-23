import { UserEntity } from './user.entity';
import { EntityManager, Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDTO } from './dto/create-user.dto';
export declare class UserService {
    private readonly repository;
    private readonly jwtService;
    constructor(repository: Repository<UserEntity>, jwtService: JwtService);
    login(email: string, password: string): Promise<{
        authToken: string;
    }>;
    createUser(user: CreateUserDTO, transaction?: EntityManager): Promise<UserEntity>;
    getUsers(email?: string, transaction?: EntityManager): Promise<UserEntity[]>;
    deleteUser(id: string, transaction?: EntityManager): Promise<void>;
    getUserIdFromToken(token: string): string;
}
