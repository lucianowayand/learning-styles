import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionaryEntity } from './entities/questionary.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionaryService {
  constructor(
    @InjectRepository(QuestionaryEntity)
    private readonly repository: Repository<QuestionaryEntity>,
  ) {}

  findByModelId(modelId: string): Promise<QuestionaryEntity[]> {
    return this.repository.find({
      where: {
        modelId,
      },
      relations: ['questions', 'questions.answers'],
    });
  }

  findById(id: string): Promise<QuestionaryEntity> {
    return this.repository.findOne({
      where: {
        id,
      },
      relations: [
        'questions',
        'questions.answers',
        'questions.answers.learningType',
      ],
    });
  }
}
