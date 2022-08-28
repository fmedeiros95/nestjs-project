import { EntityBase } from "../../../utils/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class UserBalance extends EntityBase {
	@Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
	balance: number;

	@ManyToOne(() => User, user => user.balances)
	@JoinColumn()
	user: User;
}
