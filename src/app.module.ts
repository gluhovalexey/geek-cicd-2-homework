import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ControllersModule } from './controllers/controllers.module';
import configuration from './config/config';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
    ControllersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
