import { LearningTypeService } from './learning-type.service';
import { LearningTypeEntity } from './learning-type.entity';
export declare class LearningTypeController {
    private readonly service;
    constructor(service: LearningTypeService);
    findByModelId(modelId: string): Promise<LearningTypeEntity[]>;
}
