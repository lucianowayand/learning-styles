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
exports.AnswerEntity = void 0;
const core_entity_1 = require("../../../core/core.entity");
const typeorm_1 = require("typeorm");
const question_entity_1 = require("./question.entity");
const learning_type_entity_1 = require("../../learning-types/learning-type.entity");
let AnswerEntity = class AnswerEntity extends core_entity_1.CoreEntity {
};
exports.AnswerEntity = AnswerEntity;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AnswerEntity.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AnswerEntity.prototype, "questionId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => question_entity_1.QuestionEntity, (question) => question.answers, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", question_entity_1.QuestionEntity)
], AnswerEntity.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AnswerEntity.prototype, "learningTypeId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => learning_type_entity_1.LearningTypeEntity, (learningType) => learningType.answers, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", learning_type_entity_1.LearningTypeEntity)
], AnswerEntity.prototype, "learningType", void 0);
exports.AnswerEntity = AnswerEntity = __decorate([
    (0, typeorm_1.Entity)('answers')
], AnswerEntity);
//# sourceMappingURL=answer.entity.js.map