import { ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DBCONNECTION',
    useFactory: (config: ConfigService): Promise<typeof mongoose> => {
      console.log(`mongodb://${config.get('database.user')}:${config.get('database.pass')}@${config.get('database.host')}:${config.get('database.port')}/${config.get('database.name')}`);
      
      return mongoose.connect(`mongodb://${config.get('database.user')}:${config.get('database.pass')}@${config.get('database.host')}:${config.get('database.port')}/${config.get('database.name')}`);
    },
    inject: [ConfigService]
  }
]