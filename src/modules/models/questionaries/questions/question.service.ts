import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuestionEntity } from './question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionEntity)
    private readonly repository: Repository<QuestionEntity>,
  ) {}

  findByQuestionaryId(questionaryId: string): Promise<QuestionEntity[]> {
    return this.repository.find({
      where: {
        questionaryId,
      },
    });
  }
}
