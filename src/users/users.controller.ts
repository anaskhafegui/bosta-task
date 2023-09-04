import {
  Body,
  Controller,
  Post,
  Get,
  Query,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    try {
      const result = await this.usersService.createUser(createUserDto);
      return result;
    } catch (error) {
      throw new BadRequestException('Something bad happened', error);
    }
  }

  @Post('/signin')
  async signin(
    @Body() LoginUser: LoginUserDto,
  ): Promise<{ accessToken: string }> {
    try {
      const result = await this.usersService.signIn(LoginUser);
      return result;
    } catch (err) {
      console.error('Something bad happened' + err);
      throw err;
    }
  }

  @Get('/verify-email')
  async verifyEmail(
    @Query('token') verificationToken: string,
  ): Promise<boolean> {
    const result = await this.usersService.verifyEmail(verificationToken);
    return result;
  }
}
