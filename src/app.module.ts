import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { FilesModule } from './files/files.module';
import { UserCoursesModule } from './user-courses/user-courses.module';
import { CourseFilesModule } from './course-files/course-files.module';
import { CourseModule } from './course/course.module';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Log } from './log/entities/log.entity';



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: process.env.DIALECT as any,
      host: process.env.HOST,
      port: parseInt(process.env.PORT_DB, 10),
      username: 'postgres',
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      autoLoadModels: process.env.AUTO_LOAD_MODELS === 'true',
      synchronize: process.env.SYNCHRONIZE === 'true',
      logging: false
    }),
    SequelizeModule.forFeature([Log]),
    UserModule,
    CourseModule,
    FilesModule,
    UserCoursesModule,
    CourseFilesModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
