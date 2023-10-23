import { Module } from '@nestjs/common';
import { PessoasService } from './pessoas.service';
import { PessoasController } from './pessoas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoas } from './entities/pessoas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pessoas]), Pessoas],
  controllers: [PessoasController],
  providers: [PessoasService],
})
export class PessoasModule {}
