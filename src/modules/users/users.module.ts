import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UserBalance } from './entities/user-balance.entity';
// import { UserSubscriber } from './subscribers/user.subscriber';
// import { WelcomeTask } from './tasks/welcome.task';

@Module({
	imports: [
		TypeOrmModule.forFeature([User, UserBalance])
	],
	controllers: [UsersController],
	providers: [
		UsersService,
		// WelcomeTask,
		// UserSubscriber
	],
})
export class UsersModule {}
