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
exports.IsUserGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let IsUserGuard = class IsUserGuard {
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
            const { userId } = request.params;
            if (userId) {
                if (payload.id !== userId || !payload.id) {
                    throw new common_1.UnauthorizedException('Invalid token');
                }
            }
            else {
                throw new common_1.UnauthorizedException('Invalid params');
            }
        }
        catch (err) {
            throw new common_1.HttpException(err?.message, common_1.HttpStatus.UNAUTHORIZED);
        }
        return true;
    }
};
exports.IsUserGuard = IsUserGuard;
exports.IsUserGuard = IsUserGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], IsUserGuard);
//# sourceMappingURL=is-user.guard.js.map