import { ModelEntity } from './model.entity';
import { Repository } from 'typeorm';
export declare class ModelService {
    private readonly repository;
    constructor(repository: Repository<ModelEntity>);
    findAllWithRelations(): Promise<ModelEntity[]>;
}
