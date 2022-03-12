import { DBConfigInterface } from "src/database/database.service";

export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      host: process.env.DATABASE_HOST || '127.0.0.1',
      port: parseInt(process.env.DATABASE_PORT, 10) || 27017,
      user: process.env.DATABASE_USER || 'test',
      pass: process.env.DATABASE_PASS || 'pass',
      name: process.env.DATABASE_NAME || 'test',
    } as DBConfigInterface
  });