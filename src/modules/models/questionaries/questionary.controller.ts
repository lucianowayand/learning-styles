import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { QuestionaryService } from './questionary.service';
import { IsAuthorizedGuard } from '../../users/guards/is-authorized.guard';
import { QuestionaryEntity } from './entities/questionary.entity';

@Controller('questionaries')
export class QuestionaryController {
  constructor(private readonly service: QuestionaryService) {}

  @Get(':id')
  @UseGuards(IsAuthorizedGuard)
  findById(@Param('id') id: string): Promise<QuestionaryEntity> {
    return this.service.findById(id);
  }

  @Get('/model/:modelId')
  @UseGuards(IsAuthorizedGuard)
  findByModelId(
    @Param('modelId') modelId: string,
  ): Promise<QuestionaryEntity[]> {
    return this.service.findByModelId(modelId);
  }
}
