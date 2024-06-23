import { Column, Entity } from 'typeorm';
import { CoreEntity } from '../core/core.entity';

@Entity('users')
export class UserEntity extends CoreEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
