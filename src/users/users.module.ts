import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { EmailService } from './email.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Import the User entity
    JwtModule.register({}), // Configure JWT here
  ],
  controllers: [UsersController], // Your user controller
  providers: [UsersService, EmailService], // Your services
  exports: [UsersService], // Export the UsersService for use in other modules
})
export class UsersModule {}
