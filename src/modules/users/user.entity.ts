import { Column, Entity, OneToMany } from 'typeorm';
import { CoreEntity } from '../core/core.entity';
import { ResolutionEntity } from '../resolutions/resolutions.entity';

@Entity('users')
export class UserEntity extends CoreEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => ResolutionEntity, (resolution) => resolution.user)
  resolutions: ResolutionEntity[];
}
