import { CoreEntity } from 'src/core/core.entity';
import { Column, Entity } from 'typeorm';

@Entity('models')
export class ModelEntity extends CoreEntity {
  @Column()
  name: string;

  @Column()
  description: string;
}
