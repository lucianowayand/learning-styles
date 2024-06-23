import { CoreEntity } from 'src/modules/core/core.entity';
import { QuestionaryEntity } from '../models/questionaries/entities/questionary.entity';
import { UserEntity } from '../users/user.entity';
import { LearningTypeEntity } from '../models/learning-types/learning-type.entity';
export declare class ResolutionEntity extends CoreEntity {
    resolution: any;
    questionaryId: string;
    questionary: QuestionaryEntity;
    userId: string;
    user: UserEntity;
    learningTypeId: string;
    learningType: LearningTypeEntity;
}
