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
exports.IsAuthorizedGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let IsAuthorizedGuard = class IsAuthorizedGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization?.split(' ')[1];
        if (!token) {
            throw new common_1.UnauthorizedException('No token provided');
        }
        try {
            const payload = this.jwtService.verify(token, {
                secret: process.env.POSTGRES_PASSWORD,
            });
            if (!payload.id) {
                throw new common_1.UnauthorizedException('Invalid token');
            }
        }
        catch (err) {
            throw new common_1.HttpException(err?.message, common_1.HttpStatus.BAD_REQUEST);
        }
        return true;
    }
};
exports.IsAuthorizedGuard = IsAuthorizedGuard;
exports.IsAuthorizedGuard = IsAuthorizedGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], IsAuthorizedGuard);
//# sourceMappingURL=is-authorized.guard.js.map