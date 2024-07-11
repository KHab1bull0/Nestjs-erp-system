import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { CourseModule } from '../course/course.module';

@Module({
  controllers: [FilesController],
  providers: [FilesService],
  imports: [CourseModule],
})
export class FilesModule {}
