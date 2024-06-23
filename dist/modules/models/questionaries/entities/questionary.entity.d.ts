import { CoreEntity } from '../../../core/core.entity';
import { ModelEntity } from '../../model.entity';
import { QuestionEntity } from './question.entity';
import { ResolutionEntity } from 'src/modules/resolutions/resolutions.entity';
export declare class QuestionaryEntity extends CoreEntity {
    name: string;
    modelId: string;
    model: ModelEntity;
    questions: QuestionEntity[];
    resolutions: ResolutionEntity[];
}
