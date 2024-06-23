import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { LearningTypeService } from './learning-type.service';
import { IsAuthorizedGuard } from 'src/modules/users/guards/is-authorized.guard';
import { LearningTypeEntity } from './learning-type.entity';

@Controller('learning-types')
export class LearningTypeController {
  constructor(private readonly service: LearningTypeService) {}

  @Get(':modelId')
  @UseGuards(IsAuthorizedGuard)
  findByModelId(
    @Param('modelId') modelId: string,
  ): Promise<LearningTypeEntity[]> {
    return this.service.findByModelId(modelId);
  }
}
