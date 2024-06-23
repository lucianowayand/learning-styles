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
exports.LearningTypeEntity = void 0;
const typeorm_1 = require("typeorm");
const core_entity_1 = require("../../core/core.entity");
const model_entity_1 = require("../model.entity");
const answer_entity_1 = require("../questionaries/entities/answer.entity");
const resolutions_entity_1 = require("../../resolutions/resolutions.entity");
let LearningTypeEntity = class LearningTypeEntity extends core_entity_1.CoreEntity {
};
exports.LearningTypeEntity = LearningTypeEntity;
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], LearningTypeEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], LearningTypeEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LearningTypeEntity.prototype, "modelId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => model_entity_1.ModelEntity, (model) => model.questionaries, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", model_entity_1.ModelEntity)
], LearningTypeEntity.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => answer_entity_1.AnswerEntity, (answer) => answer.learningType),
    __metadata("design:type", Array)
], LearningTypeEntity.prototype, "answers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => resolutions_entity_1.ResolutionEntity, (resolution) => resolution.user),
    __metadata("design:type", Array)
], LearningTypeEntity.prototype, "resolutions", void 0);
exports.LearningTypeEntity = LearningTypeEntity = __decorate([
    (0, typeorm_1.Entity)('learning_types')
], LearningTypeEntity);
//# sourceMappingURL=learning-type.entity.js.map