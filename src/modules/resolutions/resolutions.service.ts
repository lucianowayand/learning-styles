import { Injectable } from '@nestjs/common';
import { ResolutionEntity } from './resolutions.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../users/user.service';
import { CreateResolutionDTO } from './dto/create-resolution.dto';
import { AnswerEntity } from '../models/questionaries/entities/answer.entity';
import { ModelKey } from '../models/model.entity';

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

    newResolution.learningTypeId = this.handleResult(
      createDTO.resolution,
      createDTO.modelKey,
    );

    return this.repository.save(newResolution);
  }

  handleResult(answers: AnswerEntity[], modelKey: ModelKey): string {
    switch (modelKey) {
      case ModelKey.VARK:
        return this.handleVarkModel(answers);

      default:
        return this.handleGenericModel(answers);
    }
  }

  handleVarkModel(answers: AnswerEntity[]): string {
    const learningTypesCount = answers.reduce((acc, curr) => {
      acc[curr.learningTypeId] = acc[curr.learningTypeId] + 1 || 1;
      return acc;
    }, {});

    const learningType = Object.keys(learningTypesCount).map((key) => ({
      key,
      count: learningTypesCount[key],
    }));

    const orderedLearningTypes = learningType.sort((a, b) => b.count - a.count);

    if (orderedLearningTypes[0].count === orderedLearningTypes[1].count) {
      return 'ca395da4-80c2-47a4-8393-e5ea3cc916dd';
    }

    return orderedLearningTypes[0].key;
  }

  handleGenericModel(answers: AnswerEntity[]): string {
    const learningTypesCount = answers.reduce((acc, curr) => {
      acc[curr.learningTypeId] = acc[curr.learningTypeId] + 1 || 1;
      return acc;
    }, {});

    const learningType = Object.keys(learningTypesCount).reduce((a, b) =>
      learningTypesCount[a] > learningTypesCount[b] ? a : b,
    );

    return learningType;
  }
}
