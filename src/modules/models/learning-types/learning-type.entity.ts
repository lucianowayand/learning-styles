import { Column, Entity, ManyToOne } from 'typeorm';
import { CoreEntity } from '../../core/core.entity';
import { ModelEntity } from '../model.entity';

@Entity('learning_types')
export class LearningTypeEntity extends CoreEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  modelId: string;

  @ManyToOne(() => ModelEntity, (model) => model.questionaries, {
    onDelete: 'CASCADE',
  })
  model: ModelEntity;
}
