import { Column, Entity, OneToMany } from 'typeorm';
import { CoreEntity } from '../core/core.entity';
import { QuestionaryEntity } from '../questionaries/questionary.entity';

@Entity('models')
export class ModelEntity extends CoreEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => QuestionaryEntity, (questionary) => questionary.model)
  questionaries: QuestionaryEntity[];
}
