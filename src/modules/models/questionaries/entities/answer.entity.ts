import { CoreEntity } from 'src/modules/core/core.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { QuestionEntity } from './question.entity';
import { LearningTypeEntity } from 'src/modules/models/learning-types/learning-type.entity';

@Entity('answers')
export class AnswerEntity extends CoreEntity {
  @Column()
  text: string;

  @Column()
  questionId: string;

  @ManyToOne(() => QuestionEntity, (question) => question.answers, {
    onDelete: 'CASCADE',
  })
  question: QuestionEntity;

  @Column()
  learningTypeId: string;

  @ManyToOne(() => LearningTypeEntity, (learningType) => learningType.answers, {
    onDelete: 'CASCADE',
  })
  learningType: LearningTypeEntity;
}
