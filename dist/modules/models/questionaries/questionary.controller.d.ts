import { QuestionaryService } from './questionary.service';
import { QuestionaryEntity } from './entities/questionary.entity';
export declare class QuestionaryController {
    private readonly service;
    constructor(service: QuestionaryService);
    findById(id: string): Promise<QuestionaryEntity>;
    findByModelId(modelId: string): Promise<QuestionaryEntity[]>;
}
