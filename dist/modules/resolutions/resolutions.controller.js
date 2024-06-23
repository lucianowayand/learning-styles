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
exports.ResolutionsController = void 0;
const common_1 = require("@nestjs/common");
const resolutions_service_1 = require("./resolutions.service");
const is_authorized_guard_1 = require("../users/guards/is-authorized.guard");
const create_resolution_dto_1 = require("./dto/create-resolution.dto");
let ResolutionsController = class ResolutionsController {
    constructor(service) {
        this.service = service;
    }
    findByModelId(modelId, req) {
        const accessToken = req.headers.authorization.split(' ')[1];
        return this.service.findByModelAndUser(modelId, accessToken);
    }
    create(body, req) {
        const accessToken = req.headers.authorization.split(' ')[1];
        return this.service.create(body, accessToken);
    }
};
exports.ResolutionsController = ResolutionsController;
__decorate([
    (0, common_1.Get)('model/:modelId'),
    (0, common_1.UseGuards)(is_authorized_guard_1.IsAuthorizedGuard),
    __param(0, (0, common_1.Param)('modelId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ResolutionsController.prototype, "findByModelId", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(is_authorized_guard_1.IsAuthorizedGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_resolution_dto_1.CreateResolutionDTO, Object]),
    __metadata("design:returntype", Promise)
], ResolutionsController.prototype, "create", null);
exports.ResolutionsController = ResolutionsController = __decorate([
    (0, common_1.Controller)('resolutions'),
    __metadata("design:paramtypes", [resolutions_service_1.ResolutionsService])
], ResolutionsController);
//# sourceMappingURL=resolutions.controller.js.map