import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ResolutionsService } from './resolutions.service';
import { IsAuthorizedGuard } from '../users/guards/is-authorized.guard';
import { ResolutionEntity } from './resolutions.entity';
import { Request } from 'express';
import { CreateResolutionDTO } from './dto/create-resolution.dto';

@Controller('resolutions')
export class ResolutionsController {
  constructor(private readonly service: ResolutionsService) {}

  @Get('model/:modelId')
  @UseGuards(IsAuthorizedGuard)
  findByModelId(
    @Param('modelId') modelId: string,
    @Req() req: Request,
  ): Promise<ResolutionEntity[]> {
    const accessToken = req.headers.authorization.split(' ')[1];

    return this.service.findByModelAndUser(modelId, accessToken);
  }

  @Post()
  @UseGuards(IsAuthorizedGuard)
  create(
    @Body() body: CreateResolutionDTO,
    @Req() req: Request,
  ): Promise<ResolutionEntity> {
    const accessToken = req.headers.authorization.split(' ')[1];

    return this.service.create(body, accessToken);
  }
}
