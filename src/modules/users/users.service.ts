import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>,
	) {/** */}

	create(createUserDto: CreateUserDto) {
		const user: User = this.usersRepository.create(createUserDto);
		return this.usersRepository.save(user);
	}

	findAll() {
		return this.usersRepository.find();
	}

	findOne(id: string) {
		return this.usersRepository.findOneBy({ id });
	}

	findOneBy(criteria: any): Promise<User> {
		return this.usersRepository.findOneBy(criteria);
	}

	update(id: string, updateUserDto: UpdateUserDto) {
		return this.usersRepository.save({
			...updateUserDto, id,
		});
	}

	remove(id: string) {
		return this.usersRepository.delete(id);
	}
}
