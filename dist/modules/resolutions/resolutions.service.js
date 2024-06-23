"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolutionsService = void 0;
const common_1 = require("@nestjs/common");
const resolutions_entity_1 = require("./resolutions.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_service_1 = require("../users/user.service");
let ResolutionsService = class ResolutionsService {
    constructor(repository, userService) {
        this.repository = repository;
        this.userService = userService;
    }
    async findByModelAndUser(modelId, accessToken) {
        const userId = await this.userService.getUserIdFromToken(accessToken);
        if (!userId) {
            throw new Error('User not found');
        }
        const resolution = await this.repository.find({
            where: {
                userId,
            },
            relations: ['learningType'],
        });
        const resolutionFiltered = resolution.filter((res) => res.learningType.modelId === modelId);
        return resolutionFiltered;
    }
    async create(createDTO, accessToken) {
        const userId = await this.userService.getUserIdFromToken(accessToken);
        if (!userId) {
            throw new Error('User not found');
        }
        const newResolution = new resolutions_entity_1.ResolutionEntity();
        newResolution.userId = userId;
        newResolution.questionaryId = createDTO.questionaryId;
        newResolution.resolution = createDTO.resolution;
        const learningTypesCount = createDTO.resolution.reduce((acc, curr) => {
            acc[curr.learningTypeId] = acc[curr.learningTypeId] + 1 || 1;
            return acc;
        }, {});
        const learningType = Object.keys(learningTypesCount).reduce((a, b) => learningTypesCount[a] > learningTypesCount[b] ? a : b);
        newResolution.learningTypeId = learningType;
        return this.repository.save(newResolution);
    }
};
exports.ResolutionsService = ResolutionsService;
exports.ResolutionsService = ResolutionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(resolutions_entity_1.ResolutionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], ResolutionsService);
//# sourceMappingURL=resolutions.service.js.map