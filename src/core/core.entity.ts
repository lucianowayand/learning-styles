import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class CoreEntity {
  @PrimaryColumn('uuid', { default: () => 'gen_random_uuid()' })
  id: string;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column('timestamp', { nullable: true, default: null })
  deletedAt: Date;
}
