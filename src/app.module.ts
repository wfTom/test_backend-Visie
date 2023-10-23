import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PessoasModule } from './pessoas/pessoas.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOSTNAME,
      port: parseInt(process.env.PORT),
      username: process.env.DB_USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      logging: false,
    }),
    PessoasModule,
  ],
})
export class AppModule {}
