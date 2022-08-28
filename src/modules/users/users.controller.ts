import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiBearerAuth()
@ApiTags('Usuários')
@Controller('users')
export class UsersController {
	constructor(
		private readonly usersService: UsersService
	) {/** */}

	@Get()
	@ApiOperation({ summary: 'Get all users' })
	async listUsers(): Promise<User[]> {
		const users: User[] = await this.usersService.findAll();
		return users;
	}

	@Post()
	@ApiOperation({ summary: 'Create user' })
	@ApiResponse({ status: 403, description: 'Forbidden.' })
	async createUser(
		@Body() createUserDto: CreateUserDto
	): Promise<CreateUserDto> {
		// Find user by email
		const emailExists: User = await this.usersService.findOneBy({ email: createUserDto.email });
		if (emailExists) throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);

		// Create user
		await this.usersService.createUser(createUserDto as User);

		// const newUser: User = await this.usersService.createUser(user);
		return createUserDto;
	}

	@Get(':id')
	@ApiResponse({
		status: 200,
		description: 'The found record',
		type: User,
	})
	async getUser(
		@Param('id') id: string
	): Promise<any> {
		const user: User = await this.usersService.findOne(id);
		return user;
	}
}
