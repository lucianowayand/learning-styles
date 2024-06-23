import { CoreEntity } from 'src/modules/core/core.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { QuestionaryEntity } from '../models/questionaries/entities/questionary.entity';
import { UserEntity } from '../users/user.entity';
import { LearningTypeEntity } from '../models/learning-types/learning-type.entity';

@Entity('resolutions')
export class ResolutionEntity extends CoreEntity {
  @Column('jsonb')
  resolution: any;

  @Column()
  questionaryId: string;

  @ManyToOne(() => QuestionaryEntity, (questionary) => questionary.resolutions)
  questionary: QuestionaryEntity;

  @Column()
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.resolutions, {
    onDelete: 'CASCADE',
  })
  user: UserEntity;

  @Column()
  learningTypeId: string;

  @ManyToOne(
    () => LearningTypeEntity,
    (learningType) => learningType.resolutions,
    {
      onDelete: 'CASCADE',
    },
  )
  learningType: LearningTypeEntity;
}
