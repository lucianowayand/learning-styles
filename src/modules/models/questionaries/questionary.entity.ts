import { Column, Entity, ManyToOne } from 'typeorm';
import { CoreEntity } from '../../core/core.entity';
import { ModelEntity } from '../model.entity';

@Entity('questionaries')
export class QuestionaryEntity extends CoreEntity {
  @Column()
  modelId: string;

  @ManyToOne(() => ModelEntity, (model) => model.questionaries, {
    onDelete: 'CASCADE',
  })
  model: ModelEntity;
}
