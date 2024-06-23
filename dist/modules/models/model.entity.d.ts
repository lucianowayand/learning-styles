import { CoreEntity } from '../core/core.entity';
import { QuestionaryEntity } from './questionaries/entities/questionary.entity';
import { LearningTypeEntity } from './learning-types/learning-type.entity';
export declare class ModelEntity extends CoreEntity {
    name: string;
    description: string;
    questionaries: QuestionaryEntity[];
    learningTypes: LearningTypeEntity[];
}
