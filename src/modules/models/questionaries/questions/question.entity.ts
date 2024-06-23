import { Column, Entity, ManyToOne } from 'typeorm';
import { CoreEntity } from '../../../core/core.entity';
import { QuestionaryEntity } from '../questionary.entity';

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
}
