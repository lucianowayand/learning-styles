import { Injectable } from '@nestjs/common';
import { LearningTypeEntity } from './learning-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LearningTypeService {
  constructor(
    @InjectRepository(LearningTypeEntity)
    private readonly repository: Repository<LearningTypeEntity>,
  ) {}

  findByModelId(modelId: string): Promise<LearningTypeEntity[]> {
    return this.repository.find({
      where: {
        modelId,
      },
    });
  }
}
