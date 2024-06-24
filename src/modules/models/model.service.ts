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

  async findAllWithRelations(): Promise<ModelEntity[]> {
    return this.repository.find({
      relations: ['questionaries', 'learningTypes'],
    });
  }

  async findOneWithRelations(id: string): Promise<ModelEntity> {
    return this.repository.findOne({
      where: { id },
      relations: ['questionaries', 'learningTypes'],
    });
  }
}
