import { DataSource, EntitySubscriberInterface, EventSubscriber, InsertEvent } from "typeorm";
import { User } from "../entities/User";

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
	constructor(
		private readonly dataSource: DataSource
	) {
		this.dataSource.subscribers.push(this);
	}

	listenTo() {
		return User;
	}

	beforeInsert(event: InsertEvent<User>) {
		// use bcrypt to hash the password
		console.log('beforeInsert', event.entity);
	}
}
