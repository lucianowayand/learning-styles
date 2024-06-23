import { Column, Entity, OneToMany } from 'typeorm';
import { CoreEntity } from '../core/core.entity';
import { QuestionaryEntity } from './questionaries/entities/questionary.entity';
import { LearningTypeEntity } from './learning-types/learning-type.entity';

@Entity('models')
export class ModelEntity extends CoreEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => QuestionaryEntity, (questionary) => questionary.model)
  questionaries: QuestionaryEntity[];

  @OneToMany(() => LearningTypeEntity, (learningType) => learningType.model)
  learningTypes: LearningTypeEntity[];
}
