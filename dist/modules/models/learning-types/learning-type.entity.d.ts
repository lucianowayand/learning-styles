import { CoreEntity } from '../../core/core.entity';
import { ModelEntity } from '../model.entity';
import { AnswerEntity } from '../questionaries/entities/answer.entity';
import { ResolutionEntity } from 'src/modules/resolutions/resolutions.entity';
export declare class LearningTypeEntity extends CoreEntity {
    name: string;
    description: string;
    modelId: string;
    model: ModelEntity;
    answers: AnswerEntity[];
    resolutions: ResolutionEntity[];
}
