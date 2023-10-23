import { Injectable } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pessoas } from './entities/pessoas.entity';
import { Repository } from 'typeorm';
import { PessoaPayload } from './interface/PessoaPayload';
import { PessoasPayload } from './interface/PessoasPayload';

@Injectable()
export class PessoasService {
  constructor(
    @InjectRepository(Pessoas)
    private pessoaRepository: Repository<Pessoas>,
  ) {}

  create(createPessoaDto: CreatePessoaDto) {
    return this.pessoaRepository.save(createPessoaDto);
  }

  findAll(): Promise<PessoasPayload[]> {
    return this.pessoaRepository.find({
      select: ['id_pessoa', 'nome', 'data_admissao'],
    });
  }

  findOne(id_pessoa: number): Promise<PessoaPayload> {
    return this.pessoaRepository.findOneBy({ id_pessoa });
  }

  async update(id_pessoa: number, updatePessoaDto: UpdatePessoaDto) {
    return this.pessoaRepository.update(id_pessoa, updatePessoaDto);
  }

  async remove(id_pessoa: number) {
    const pessoa = await this.pessoaRepository.findOneBy({ id_pessoa });
    return this.pessoaRepository.remove(pessoa);
  }
}
