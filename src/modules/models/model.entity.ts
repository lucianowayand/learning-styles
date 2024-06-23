import { Column, Entity } from 'typeorm';
import { CoreEntity } from '../core/core.entity';

@Entity('models')
export class ModelEntity extends CoreEntity {
  @Column()
  name: string;

  @Column()
  description: string;
}
