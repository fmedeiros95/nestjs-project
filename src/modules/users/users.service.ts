import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { User } from './entities/User';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>,
	) {/** */}

	findAll(): Promise<User[]> {
		return this.usersRepository.find();
	}

	findOne(id: string): Promise<User> {
		return this.usersRepository.findOneBy({ id });
	}

	findOneBy(criteria: any): Promise<User> {
		return this.usersRepository.findOneBy(criteria);
	}

	createUser(user: User): Promise<User> {
		const create: User = this.usersRepository.create(user);
		return this.usersRepository.save(create);
	}

	updateUser(user: User): Promise<User> {
		return this.usersRepository.save(user);
	}

	deleteUser(id: string): Promise<DeleteResult> {
		return this.usersRepository.delete(id);
	}
}
