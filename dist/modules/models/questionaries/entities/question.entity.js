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
exports.QuestionEntity = void 0;
const typeorm_1 = require("typeorm");
const core_entity_1 = require("../../../core/core.entity");
const questionary_entity_1 = require("./questionary.entity");
const answer_entity_1 = require("./answer.entity");
let QuestionEntity = class QuestionEntity extends core_entity_1.CoreEntity {
};
exports.QuestionEntity = QuestionEntity;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], QuestionEntity.prototype, "questionaryId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], QuestionEntity.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => questionary_entity_1.QuestionaryEntity, (questionary) => questionary.questions, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", questionary_entity_1.QuestionaryEntity)
], QuestionEntity.prototype, "questionary", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => answer_entity_1.AnswerEntity, (answer) => answer.question),
    __metadata("design:type", Array)
], QuestionEntity.prototype, "answers", void 0);
exports.QuestionEntity = QuestionEntity = __decorate([
    (0, typeorm_1.Entity)('questions')
], QuestionEntity);
//# sourceMappingURL=question.entity.js.map