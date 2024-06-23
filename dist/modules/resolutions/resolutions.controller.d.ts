import { ResolutionsService } from './resolutions.service';
import { ResolutionEntity } from './resolutions.entity';
import { Request } from 'express';
import { CreateResolutionDTO } from './dto/create-resolution.dto';
export declare class ResolutionsController {
    private readonly service;
    constructor(service: ResolutionsService);
    findByModelId(modelId: string, req: Request): Promise<ResolutionEntity[]>;
    create(body: CreateResolutionDTO, req: Request): Promise<ResolutionEntity>;
}
