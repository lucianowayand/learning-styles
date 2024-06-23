import { ModelEntity } from './model.entity';
import { ModelService } from './model.service';
export declare class ModelController {
    private readonly service;
    constructor(service: ModelService);
    getAll(): Promise<ModelEntity[]>;
}
