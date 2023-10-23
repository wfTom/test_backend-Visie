import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const port = +process.env.APP_PORT || 3001;

  app.setGlobalPrefix('api');
  console.log('Port running on: ', port);

  const options = new DocumentBuilder()
    .setTitle('Teste para vaga de Programador Fullstack na Visie')
    .setDescription('Documentação para API do Teste')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();
