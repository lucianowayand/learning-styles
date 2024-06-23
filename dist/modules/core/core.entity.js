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
exports.CoreEntity = void 0;
const typeorm_1 = require("typeorm");
let CoreEntity = class CoreEntity {
};
exports.CoreEntity = CoreEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid', { default: () => 'gen_random_uuid()' }),
    __metadata("design:type", String)
], CoreEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], CoreEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], CoreEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { nullable: true, default: null }),
    __metadata("design:type", Date)
], CoreEntity.prototype, "deletedAt", void 0);
exports.CoreEntity = CoreEntity = __decorate([
    (0, typeorm_1.Entity)()
], CoreEntity);
//# sourceMappingURL=core.entity.js.map