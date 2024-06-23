import { ModelController } from './model.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelEntity } from './model.entity';
import { ModelService } from './model.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { QuestionaryEntity } from './questionaries/questionary.entity';
import { QuestionaryController } from './questionaries/questionary.controller';
import { QuestionaryService } from './questionaries/questionary.service';

@Module({
  imports: [TypeOrmModule.forFeature([ModelEntity, QuestionaryEntity])],
  controllers: [ModelController, QuestionaryController],
  providers: [ModelService, QuestionaryService, JwtService],
})
export class ModelModule {}
