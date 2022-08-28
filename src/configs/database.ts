import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";

export const databaseConfig: TypeOrmModuleOptions = {
	type: <any>process.env.DB_CONNECTION || 'postgres',
	host: process.env.DB_HOST || 'localhost',
	port: parseInt(process.env.DB_PORT) || 5432,
	username: process.env.DB_USERNAME || 'postgres',
	password: process.env.DB_PASSWORD || 'postgres',
	database: process.env.DB_DATABASE || 'nestjs-test',
	schema: process.env.DB_SCHEMA || 'public',
	synchronize: process.env.DB_SYNCHRONIZE === 'true' || false,
	retryAttempts: parseInt(process.env.DB_RETRY_ATTEMPTS) || 10,
	retryDelay: parseInt(process.env.DB_RETRY_DELAY) || 3000,
	entities: [ join(__dirname, '../modules/*/entities') + '/*' ],
};
