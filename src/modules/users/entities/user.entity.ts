import { hashSync } from "bcrypt";
import { BeforeInsert, Column, Entity } from "typeorm";
import { EntityBase } from "../../../utils/entity-base.util";

@Entity()
export class User extends EntityBase {
	@Column({ unique: true })
	email: string;

	@Column({ nullable: true })
	password: string;

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
