"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelModule = void 0;
const model_controller_1 = require("./model.controller");
const typeorm_1 = require("@nestjs/typeorm");
const model_entity_1 = require("./model.entity");
const model_service_1 = require("./model.service");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const questionary_entity_1 = require("./questionaries/entities/questionary.entity");
const questionary_controller_1 = require("./questionaries/questionary.controller");
const questionary_service_1 = require("./questionaries/questionary.service");
const question_entity_1 = require("./questionaries/entities/question.entity");
const learning_type_controller_1 = require("./learning-types/learning-type.controller");
const learning_type_service_1 = require("./learning-types/learning-type.service");
const learning_type_entity_1 = require("./learning-types/learning-type.entity");
let ModelModule = class ModelModule {
};
exports.ModelModule = ModelModule;
exports.ModelModule = ModelModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                model_entity_1.ModelEntity,
                questionary_entity_1.QuestionaryEntity,
                question_entity_1.QuestionEntity,
                learning_type_entity_1.LearningTypeEntity,
            ]),
        ],
        controllers: [model_controller_1.ModelController, questionary_controller_1.QuestionaryController, learning_type_controller_1.LearningTypeController],
        providers: [
            model_service_1.ModelService,
            questionary_service_1.QuestionaryService,
            learning_type_service_1.LearningTypeService,
            jwt_1.JwtService,
        ],
    })
], ModelModule);
//# sourceMappingURL=model.module.js.map