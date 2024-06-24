import { Controller, Get, UseGuards } from '@nestjs/common';
import { ModelEntity } from './model.entity';
import { ModelService } from './model.service';
import { IsAuthorizedGuard } from '../users/guards/is-authorized.guard';

@Controller('models')
export class ModelController {
  constructor(private readonly service: ModelService) {}

  @Get()
  @UseGuards(IsAuthorizedGuard)
  getAll(): Promise<ModelEntity[]> {
    return this.service.findAllWithRelations();
  }

  @Get(':id')
  @UseGuards(IsAuthorizedGuard)
  findById(id: string): Promise<ModelEntity> {
    return this.service.findOneWithRelations(id);
  }
}
