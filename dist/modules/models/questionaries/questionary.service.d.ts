import { QuestionaryEntity } from './entities/questionary.entity';
import { Repository } from 'typeorm';
export declare class QuestionaryService {
    private readonly repository;
    constructor(repository: Repository<QuestionaryEntity>);
    findByModelId(modelId: string): Promise<QuestionaryEntity[]>;
    findById(id: string): Promise<QuestionaryEntity>;
}
