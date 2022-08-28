import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { AppService } from './app.service';
import { IbgeService } from './services/ibge.service';
import { databaseConfig } from './configs/database';
import { DataSource } from 'typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { CompaniesModule } from './modules/companies/companies.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/roles.guard';

@Module({
	imports: [
		ScheduleModule.forRoot(),
		ConfigModule.forRoot(),
		TypeOrmModule.forRoot(databaseConfig),
		AuthModule,
		UsersModule,
		CompaniesModule
	],
	controllers: [],
	providers: [
		{ provide: APP_GUARD, useClass: RolesGuard },
		AppService,
		IbgeService
	],
})
export class AppModule {
	constructor(
		private dataSource: DataSource
	) {/** */}
}
