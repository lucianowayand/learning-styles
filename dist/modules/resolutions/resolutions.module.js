"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolutionsModule = void 0;
const resolutions_controller_1 = require("./resolutions.controller");
const typeorm_1 = require("@nestjs/typeorm");
const resolutions_entity_1 = require("./resolutions.entity");
const resolutions_service_1 = require("./resolutions.service");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_module_1 = require("../users/user.module");
let ResolutionsModule = class ResolutionsModule {
};
exports.ResolutionsModule = ResolutionsModule;
exports.ResolutionsModule = ResolutionsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([resolutions_entity_1.ResolutionEntity]), user_module_1.UserModule],
        controllers: [resolutions_controller_1.ResolutionsController],
        providers: [resolutions_service_1.ResolutionsService, jwt_1.JwtService],
    })
], ResolutionsModule);
//# sourceMappingURL=resolutions.module.js.map