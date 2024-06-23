import { LearningTypeEntity } from './learning-type.entity';
import { Repository } from 'typeorm';
export declare class LearningTypeService {
    private readonly repository;
    constructor(repository: Repository<LearningTypeEntity>);
    findByModelId(modelId: string): Promise<LearningTypeEntity[]>;
}
