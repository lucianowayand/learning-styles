import { ModelController } from './model.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelEntity } from './model.entity';
import { ModelService } from './model.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { QuestionaryEntity } from './questionaries/questionary.entity';
import { QuestionaryController } from './questionaries/questionary.controller';
import { QuestionaryService } from './questionaries/questionary.service';
import { QuestionController } from './questionaries/questions/question.controller';
import { QuestionEntity } from './questionaries/questions/question.entity';
import { QuestionService } from './questionaries/questions/question.service';
import { LearningTypeController } from './learning-types/learning-type.controller';
import { LearningTypeService } from './learning-types/learning-type.service';
import { LearningTypeEntity } from './learning-types/learning-type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ModelEntity,
      QuestionaryEntity,
      QuestionEntity,
      LearningTypeEntity,
    ]),
  ],
  controllers: [
    ModelController,
    QuestionaryController,
    QuestionController,
    LearningTypeController,
  ],
  providers: [
    ModelService,
    QuestionaryService,
    QuestionService,
    LearningTypeService,
    JwtService,
  ],
})
export class ModelModule {}
