import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

import Usuarios from './Usuarios';

@Entity('agendamentos')
class Agendamentos {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    prestador_servico_id: string;

    @ManyToOne(() => Usuarios)
    @JoinColumn({ name: 'prestador_servico_id' }) // joincolumn representa na tabela agendamentos qual o campo que vai se relacionar com o model usuario
    prestador_servico: Usuarios;
    // prestador_servico representa o model usuario

    @Column('time with time zone')
    data: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Agendamentos;
