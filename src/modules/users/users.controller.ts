import { Controller, Get, Post, Body, Put, Param, Delete, HttpException, HttpStatus } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { User } from "./entities/user.entity";
import { DeleteResult } from "typeorm";

@ApiBearerAuth()
@ApiTags('Usuários')
@Controller("users")
export class UsersController {
	constructor(
		private readonly usersService: UsersService
	) {/** */}

	@Post()
	@ApiOperation({ summary: 'Criar usuário' })
	async create(@Body() createUserDto: CreateUserDto): Promise<User> {
		// Find user by email
		const emailExists: User = await this.usersService.findOneBy({ email: createUserDto.email });
		if (emailExists) throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);

		return this.usersService.create(createUserDto);
	}

	@Get()
	@ApiOperation({ summary: 'Listar usuários' })
	findAll(): Promise<User[]> {
		return this.usersService.findAll();
	}

	@Get(":id")
	@ApiOperation({ summary: 'Buscar usuário' })
	findOne(@Param("id") id: string): Promise<User> {
		return this.usersService.findOne(id);
	}

	@Put(":id")
	@ApiOperation({ summary: 'Atualizar usuário' })
	update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
		return this.usersService.update(id, updateUserDto);
	}

	@Delete(":id")
	@ApiOperation({ summary: 'Deletar usuário' })
	remove(@Param("id") id: string): Promise<DeleteResult> {
		return this.usersService.remove(id);
	}
}
