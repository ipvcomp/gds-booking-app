import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('iPurvey Booking API')
    .setDescription('The iPurvey API description')
    .setVersion('1.0.0')
    .addTag('gds-booking-api')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },'Authorization')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(8000);
  
}
bootstrap();