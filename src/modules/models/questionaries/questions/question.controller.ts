import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { IsAuthorizedGuard } from '../../../users/guards/is-authorized.guard';
import { QuestionService } from './question.service';
import { QuestionEntity } from './question.entity';

@Controller('questions')
export class QuestionController {
  constructor(private readonly service: QuestionService) {}

  @Get(':questionaryId')
  @UseGuards(IsAuthorizedGuard)
  findByModelId(
    @Param('questionaryId') questionaryId: string,
  ): Promise<QuestionEntity[]> {
    return this.service.findByQuestionaryId(questionaryId);
  }
}
