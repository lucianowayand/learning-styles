import { CoreEntity } from 'src/core/core.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class UserEntity extends CoreEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}