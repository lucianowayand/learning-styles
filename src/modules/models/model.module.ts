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

@Module({
  imports: [
    TypeOrmModule.forFeature([ModelEntity, QuestionaryEntity, QuestionEntity]),
  ],
  controllers: [ModelController, QuestionaryController, QuestionController],
  providers: [ModelService, QuestionaryService, QuestionService, JwtService],
})
export class ModelModule {}
