import { ResolutionEntity } from './resolutions.entity';
import { Repository } from 'typeorm';
import { UserService } from '../users/user.service';
import { CreateResolutionDTO } from './dto/create-resolution.dto';
export declare class ResolutionsService {
    private readonly repository;
    private readonly userService;
    constructor(repository: Repository<ResolutionEntity>, userService: UserService);
    findByModelAndUser(modelId: string, accessToken: string): Promise<ResolutionEntity[]>;
    create(createDTO: CreateResolutionDTO, accessToken: string): Promise<ResolutionEntity>;
}
