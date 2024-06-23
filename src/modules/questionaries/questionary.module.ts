import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionaryController } from './questionary.controller';
import { QuestionaryEntity } from './questionary.entity';
import { QuestionaryService } from './questionary.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionaryEntity])],
  controllers: [QuestionaryController],
  providers: [QuestionaryService, JwtService],
})
export class QuestionaryModule {}
