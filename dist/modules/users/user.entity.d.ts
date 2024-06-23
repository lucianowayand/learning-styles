import { CoreEntity } from '../core/core.entity';
import { ResolutionEntity } from '../resolutions/resolutions.entity';
export declare class UserEntity extends CoreEntity {
    name: string;
    email: string;
    password: string;
    resolutions: ResolutionEntity[];
}
