import { CoreEntity } from 'src/modules/core/core.entity';
import { QuestionEntity } from './question.entity';
import { LearningTypeEntity } from 'src/modules/models/learning-types/learning-type.entity';
export declare class AnswerEntity extends CoreEntity {
    text: string;
    questionId: string;
    question: QuestionEntity;
    learningTypeId: string;
    learningType: LearningTypeEntity;
}
