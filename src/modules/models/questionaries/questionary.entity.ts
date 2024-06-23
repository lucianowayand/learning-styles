import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { CoreEntity } from '../../core/core.entity';
import { ModelEntity } from '../model.entity';
import { QuestionEntity } from './questions/question.entity';

@Entity('questionaries')
export class QuestionaryEntity extends CoreEntity {
  @Column()
  modelId: string;

  @ManyToOne(() => ModelEntity, (model) => model.questionaries, {
    onDelete: 'CASCADE',
  })
  model: ModelEntity;

  @OneToMany(() => QuestionEntity, (question) => question.questionary)
  questions: QuestionEntity[];
}
