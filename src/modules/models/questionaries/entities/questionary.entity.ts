import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { CoreEntity } from '../../../core/core.entity';
import { ModelEntity } from '../../model.entity';
import { QuestionEntity } from './question.entity';
import { ResolutionEntity } from 'src/modules/resolutions/resolutions.entity';

@Entity('questionaries')
export class QuestionaryEntity extends CoreEntity {
  @Column({ nullable: true })
  name: string;

  @Column()
  modelId: string;

  @ManyToOne(() => ModelEntity, (model) => model.questionaries, {
    onDelete: 'CASCADE',
  })
  model: ModelEntity;

  @OneToMany(() => QuestionEntity, (question) => question.questionary)
  questions: QuestionEntity[];

  @OneToMany(() => ResolutionEntity, (resolution) => resolution.questionary)
  resolutions: ResolutionEntity[];
}
