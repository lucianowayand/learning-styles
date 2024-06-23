import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { CoreEntity } from '../../core/core.entity';
import { ModelEntity } from '../model.entity';
import { AnswerEntity } from '../questionaries/entities/answer.entity';
import { ResolutionEntity } from 'src/modules/resolutions/resolutions.entity';

@Entity('learning_types')
export class LearningTypeEntity extends CoreEntity {
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  modelId: string;

  @ManyToOne(() => ModelEntity, (model) => model.questionaries, {
    onDelete: 'CASCADE',
  })
  model: ModelEntity;

  @OneToMany(() => AnswerEntity, (answer) => answer.learningType)
  answers: AnswerEntity[];

  @OneToMany(() => ResolutionEntity, (resolution) => resolution.user)
  resolutions: ResolutionEntity[];
}
