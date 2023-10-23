import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreatePessoaDto {
  @ApiProperty({ maximum: 100 })
  @IsString()
  @MaxLength(100)
  nome: string;

  @ApiProperty({ maximum: 100 })
  @IsString()
  @MaxLength(100)
  rg: string;

  @ApiProperty({ maximum: 100 })
  @IsString()
  @MaxLength(100)
  cpf: string;

  @ApiProperty({ type: 'date' })
  @IsDateString()
  data_nascimento: Date;

  @ApiProperty({ type: 'date' })
  @IsDateString()
  data_admissao: Date;

  @ApiProperty({ maximum: 100, required: false })
  @IsString()
  @MaxLength(100)
  @IsOptional()
  funcao: string;
}
