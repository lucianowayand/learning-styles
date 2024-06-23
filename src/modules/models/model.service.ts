import { Injectable } from '@nestjs/common';
import { ModelEntity } from './model.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ModelService {
  constructor(
    @InjectRepository(ModelEntity)
    private readonly repository: Repository<ModelEntity>,
  ) {}

  async findAllWithQuestionaries(): Promise<ModelEntity[]> {
    return this.repository.find({ relations: ['questionaries'] });
  }
}
