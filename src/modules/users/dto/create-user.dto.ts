import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
	@IsEmail({}, { message: 'Email inválido' })
	email: string;

	@IsNotEmpty({ message: 'Senha é obrigatória' })
	@IsString({ message: 'Senha deve ser uma string' })
	password: string;
}
