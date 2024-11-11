/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import {ApiResponseInterceptor} from '@avans-nx-workshop/backend/dto'
 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const CorsOptions: CorsOptions = {};
  app.enableCors(CorsOptions);
  
  app.useGlobalInterceptors(new ApiResponseInterceptor());

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Meal API')
    .setDescription('API for managing meals')
    .setVersion('1.0')
    .addServer(`/`)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(
    `📄 Swagger documentation is available at: http://localhost:${port}/api-docs`
  );
}

bootstrap();
