import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import { ProfileModule } from './profile/profile.module';
import { TagModule } from './tag/tag.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (configService: ConfigService) => {
    //     const { dbHost, dbPort, dbUser, dbPassword, dbName } = configService;
    //     return {
    //       type: 'mysql',
    //       host: dbHost,
    //       port: dbPort,
    //       username: dbUser,
    //       password: dbPassword,
    //       database: dbName,
    //       entities: [__dirname + '/**/*.entity{.ts.js}'],
    //       synchronize: process.env.NODE_ENV === 'development',
    //     } as TypeOrmModuleOptions;
    //   },
    // }),
    UserModule,
    ArticleModule,
    ProfileModule,
    TagModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
