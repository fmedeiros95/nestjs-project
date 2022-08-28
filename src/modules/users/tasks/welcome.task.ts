import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { User } from '../entities/User';
import { UsersService } from '../users.service';

@Injectable()
export class WelcomeTask {
	private readonly logger = new Logger(WelcomeTask.name);

	constructor(
		private readonly userService: UsersService
	) {/** */}

	@Cron('*/5 * * * * *')
	async handleCron() {
		const users: User[] = await this.userService.findAll();
		this.logger.debug(`Users: ${users.length}`);
		this.logger.debug('Called when the current second is 5');
	}
}
