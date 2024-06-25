import { ModelKey } from 'src/modules/models/model.entity';
import { AnswerEntity } from 'src/modules/models/questionaries/entities/answer.entity';

export class CreateResolutionDTO {
  questionaryId: string;
  resolution: AnswerEntity[];
  modelKey: ModelKey;
}
