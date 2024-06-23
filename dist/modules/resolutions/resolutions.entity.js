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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolutionEntity = void 0;
const core_entity_1 = require("../core/core.entity");
const typeorm_1 = require("typeorm");
const questionary_entity_1 = require("../models/questionaries/entities/questionary.entity");
const user_entity_1 = require("../users/user.entity");
const learning_type_entity_1 = require("../models/learning-types/learning-type.entity");
let ResolutionEntity = class ResolutionEntity extends core_entity_1.CoreEntity {
};
exports.ResolutionEntity = ResolutionEntity;
__decorate([
    (0, typeorm_1.Column)('jsonb'),
    __metadata("design:type", Object)
], ResolutionEntity.prototype, "resolution", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResolutionEntity.prototype, "questionaryId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => questionary_entity_1.QuestionaryEntity, (questionary) => questionary.resolutions),
    __metadata("design:type", questionary_entity_1.QuestionaryEntity)
], ResolutionEntity.prototype, "questionary", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResolutionEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.resolutions, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], ResolutionEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResolutionEntity.prototype, "learningTypeId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => learning_type_entity_1.LearningTypeEntity, (learningType) => learningType.resolutions, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", learning_type_entity_1.LearningTypeEntity)
], ResolutionEntity.prototype, "learningType", void 0);
exports.ResolutionEntity = ResolutionEntity = __decorate([
    (0, typeorm_1.Entity)('resolutions')
], ResolutionEntity);
//# sourceMappingURL=resolutions.entity.js.map