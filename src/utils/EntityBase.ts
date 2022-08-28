import { ApiProperty } from "@nestjs/swagger";
import {
	CreateDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from "typeorm";

export abstract class EntityBase {
	@ApiProperty({
		description: 'Identificador único do registro',
	})
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@ApiProperty({
		description: 'Data de criação do registro',
	})
	@CreateDateColumn()
	createdAt: Date;

	@ApiProperty({
		description: 'Data de atualização do registro',
	})
	@UpdateDateColumn()
	updatedAt: Date;
}
