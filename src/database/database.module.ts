import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service'; 
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
        imports: [ConfigModule],        
        useFactory: async (configService: ConfigService) => ({
          uri: `mongodb://${configService.get('database.host')}:${configService.get('database.port')}/${configService.get('database.name')}`,          
          user: configService.get('database.user'),
          pass: configService.get('database.pass')
        }),
        inject: [ConfigService],
    })  
],
  providers: [DatabaseService],  
})
export class DatabaseModule {}
