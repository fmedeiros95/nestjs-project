import { EntityBase } from "../../../utils/entity-base.util";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class UserBalance extends EntityBase {
	@Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
	balance: number;

	@ManyToOne(() => User, user => user.balances)
	@JoinColumn()
	user: User;
}
