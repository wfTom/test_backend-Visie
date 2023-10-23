import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pessoas extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'tinyint' })
  id_pessoa: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nome: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  rg: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  cpf: string;

  @Column({ type: 'timestamp', nullable: false })
  data_nascimento: Date;

  @Column({ type: 'timestamp', nullable: false })
  data_admissao: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  funcao: string;
}
