import { ApiProperty } from "@nestjs/swagger";
import { hashSync } from "bcrypt";
import { BeforeInsert, Column, Entity, OneToMany } from "typeorm";
import { EntityBase } from "../../../utils/EntityBase";
import { UserBalance } from "./UserBalance";

@Entity()
export class User extends EntityBase {
	@ApiProperty({
		example: 'email@example.com',
		description: 'Email do usuário',
	})
	@Column({ unique: true })
	email: string;

	@ApiProperty({
		example: '123456',
		description: 'Senha do usuário',
	})
	@Column({ nullable: true })
	password: string;

	@OneToMany(() => UserBalance, balance => balance.user)
	balances: UserBalance[];

	@BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10);
    }

	toJSON(): User {
		const user = Object.assign({}, this);
		delete user.password;
		return user;
	}
}
