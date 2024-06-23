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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    constructor(repository, jwtService) {
        this.repository = repository;
        this.jwtService = jwtService;
    }
    async login(email, password) {
        const user = await this.repository.findOne({
            where: {
                email,
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        if (!(await bcrypt.compare(password, user.password))) {
            throw new common_1.UnauthorizedException();
        }
        const token = await this.jwtService.signAsync(JSON.stringify(user), {
            secret: process.env.POSTGRES_PASSWORD,
        });
        return { authToken: token };
    }
    async createUser(user, transaction) {
        if (!transaction) {
            return this.repository.manager.transaction((t) => this.createUser(user, t));
        }
        const existingUser = await transaction
            .createQueryBuilder(user_entity_1.UserEntity, 'user')
            .where('user.email = :email', { email: user.email })
            .getOne();
        if (existingUser) {
            throw new common_1.UnauthorizedException('user with this email already exists');
        }
        const hash = await bcrypt.hash(user.password, 8);
        const newUser = new user_entity_1.UserEntity();
        newUser.email = user.email;
        newUser.name = user.name;
        newUser.password = hash;
        return this.repository.save(newUser);
    }
    async getUsers(email, transaction) {
        if (!transaction) {
            return this.repository.manager.transaction((t) => this.getUsers(email, t));
        }
        const query = transaction.createQueryBuilder(user_entity_1.UserEntity, 'user');
        if (email) {
            query.andWhere('user.email = :email', { email });
        }
        return query.getMany();
    }
    async deleteUser(id, transaction) {
        if (!transaction) {
            return this.repository.manager.transaction((t) => this.deleteUser(id, t));
        }
        const user = transaction?.findOne(user_entity_1.UserEntity, {
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        transaction.softDelete(user_entity_1.UserEntity, id);
    }
    getUserIdFromToken(token) {
        const user = this.jwtService.verify(token, {
            secret: process.env.POSTGRES_PASSWORD,
        });
        if (!user.id)
            throw new common_1.UnauthorizedException();
        return user.id;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map