import { CoreEntity } from '../../../core/core.entity';
import { QuestionaryEntity } from './questionary.entity';
import { AnswerEntity } from './answer.entity';
export declare class QuestionEntity extends CoreEntity {
    questionaryId: string;
    text: string;
    questionary: QuestionaryEntity;
    answers: AnswerEntity[];
}
