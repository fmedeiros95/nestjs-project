import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { appConfig } from './configs/app';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	app.useGlobalPipes(new ValidationPipe(appConfig.validator));

	const config = new DocumentBuilder()
		.setTitle('NestJS API')
		.setDescription('NestJS API description')
		.setVersion('1.0')
		.addBearerAuth()
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api-docs', app, document);

	await app.listen(appConfig.port);
	console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
