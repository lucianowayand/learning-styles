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
exports.QuestionaryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const questionary_entity_1 = require("./entities/questionary.entity");
const typeorm_2 = require("typeorm");
let QuestionaryService = class QuestionaryService {
    constructor(repository) {
        this.repository = repository;
    }
    findByModelId(modelId) {
        return this.repository.find({
            where: {
                modelId,
            },
            relations: ['questions', 'questions.answers'],
        });
    }
    findById(id) {
        return this.repository.findOne({
            where: {
                id,
            },
            relations: [
                'questions',
                'questions.answers',
                'questions.answers.learningType',
            ],
        });
    }
};
exports.QuestionaryService = QuestionaryService;
exports.QuestionaryService = QuestionaryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(questionary_entity_1.QuestionaryEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], QuestionaryService);
//# sourceMappingURL=questionary.service.js.map