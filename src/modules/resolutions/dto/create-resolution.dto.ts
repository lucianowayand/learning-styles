import { AnswerEntity } from 'src/modules/models/questionaries/entities/answer.entity';

export class CreateResolutionDTO {
  questionaryId: string;
  resolution: AnswerEntity[];
}
