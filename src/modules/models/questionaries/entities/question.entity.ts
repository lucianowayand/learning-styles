import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { CoreEntity } from '../../../core/core.entity';
import { QuestionaryEntity } from './questionary.entity';
import { AnswerEntity } from './answer.entity';

@Entity('questions')
export class QuestionEntity extends CoreEntity {
  @Column()
  questionaryId: string;

  @Column()
  text: string;

  @ManyToOne(() => QuestionaryEntity, (questionary) => questionary.questions, {
    onDelete: 'CASCADE',
  })
  questionary: QuestionaryEntity;

  @OneToMany(() => AnswerEntity, (answer) => answer.question)
  answers: AnswerEntity[];
}
