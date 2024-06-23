import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { EntityManager, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
  ) {
    this.userRepository = userRepository;
  }

  async login(email: string, password: string): Promise<{ authToken: string }> {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      throw new UnauthorizedException();
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException();
    }

    const token = await this.jwtService.signAsync(JSON.stringify(user), {
      secret: process.env.POSTGRES_PASSWORD,
    });

    return { authToken: token };
  }

  async createUser(
    user: CreateUserDTO,
    transaction?: EntityManager,
  ): Promise<UserEntity> {
    if (!transaction) {
      return this.userRepository.manager.transaction((t) =>
        this.createUser(user, t),
      );
    }

    const existingUser = await transaction
      .createQueryBuilder(UserEntity, 'user')
      .where('user.email = :email', { email: user.email })
      .getOne();

    if (existingUser) {
      throw new UnauthorizedException('user with this email already exists');
    }

    const hash = await bcrypt.hash(user.password, 8);

    const newUser = new UserEntity();
    newUser.email = user.email;
    newUser.name = user.name;
    newUser.password = hash;

    return this.userRepository.save(newUser);
  }

  async getUsers(
    email?: string,
    transaction?: EntityManager,
  ): Promise<UserEntity[]> {
    if (!transaction) {
      return this.userRepository.manager.transaction((t) =>
        this.getUsers(email, t),
      );
    }

    const query = transaction.createQueryBuilder(UserEntity, 'user');
    if (email) {
      query.andWhere('user.email = :email', { email });
    }

    return query.getMany();
  }

  async deleteUser(id: string, transaction?: EntityManager): Promise<void> {
    if (!transaction) {
      return this.userRepository.manager.transaction((t) =>
        this.deleteUser(id, t),
      );
    }

    const user = transaction?.findOne(UserEntity, {
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    transaction.softDelete(UserEntity, id);
  }
}
