import { ResolutionsController } from './resolutions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResolutionEntity } from './resolutions.entity';
import { ResolutionsService } from './resolutions.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserModule } from '../users/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([ResolutionEntity]), UserModule],
  controllers: [ResolutionsController],
  providers: [ResolutionsService, JwtService],
})
export class ResolutionsModule {}
