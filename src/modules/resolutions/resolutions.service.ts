import { Injectable } from '@nestjs/common';
import { ResolutionEntity } from './resolutions.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../users/user.service';
import { CreateResolutionDTO } from './dto/create-resolution.dto';

@Injectable()
export class ResolutionsService {
  constructor(
    @InjectRepository(ResolutionEntity)
    private readonly repository: Repository<ResolutionEntity>,
    private readonly userService: UserService,
  ) {}

  async findByModelAndUser(
    accessToken: string,
    modelId?: string,
  ): Promise<ResolutionEntity[]> {
    const userId = await this.userService.getUserIdFromToken(accessToken);

    if (!userId) {
      throw new Error('User not found');
    }

    let resolution = await this.repository.find({
      where: {
        userId,
      },
      relations: ['learningType'],
      order: {
        createdAt: 'DESC',
      },
    });

    if (modelId) {
      resolution = resolution.filter(
        (res) => res.learningType.modelId === modelId,
      );
    }

    return resolution;
  }

  async create(
    createDTO: CreateResolutionDTO,
    accessToken: string,
  ): Promise<ResolutionEntity> {
    const userId = await this.userService.getUserIdFromToken(accessToken);

    if (!userId) {
      throw new Error('User not found');
    }

    const newResolution = new ResolutionEntity();
    newResolution.userId = userId;
    newResolution.questionaryId = createDTO.questionaryId;
    newResolution.resolution = createDTO.resolution;

    const learningTypesCount = createDTO.resolution.reduce((acc, curr) => {
      acc[curr.learningTypeId] = acc[curr.learningTypeId] + 1 || 1;
      return acc;
    }, {});

    const learningType = Object.keys(learningTypesCount).reduce((a, b) =>
      learningTypesCount[a] > learningTypesCount[b] ? a : b,
    );

    newResolution.learningTypeId = learningType;

    return this.repository.save(newResolution);
  }
}
