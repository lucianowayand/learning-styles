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
exports.LearningTypeController = void 0;
const common_1 = require("@nestjs/common");
const learning_type_service_1 = require("./learning-type.service");
const is_authorized_guard_1 = require("../../users/guards/is-authorized.guard");
let LearningTypeController = class LearningTypeController {
    constructor(service) {
        this.service = service;
    }
    findByModelId(modelId) {
        return this.service.findByModelId(modelId);
    }
};
exports.LearningTypeController = LearningTypeController;
__decorate([
    (0, common_1.Get)('model/:modelId'),
    (0, common_1.UseGuards)(is_authorized_guard_1.IsAuthorizedGuard),
    __param(0, (0, common_1.Param)('modelId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LearningTypeController.prototype, "findByModelId", null);
exports.LearningTypeController = LearningTypeController = __decorate([
    (0, common_1.Controller)('learning-types'),
    __metadata("design:paramtypes", [learning_type_service_1.LearningTypeService])
], LearningTypeController);
//# sourceMappingURL=learning-type.controller.js.map