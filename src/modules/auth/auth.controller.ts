import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@ApiTags('Autenticação')
@Controller('auth')
export class AuthController {
	@Post('login')
	login(@Body() loginDto: LoginDto): LoginDto {
		console.log(loginDto);
		return loginDto;
	}
}
