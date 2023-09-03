import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';
import { EmailService } from './email.service';
import { randomBytes } from 'crypto';

@Injectable()
export class UsersService {
  constructor(
    private jwtService: JwtService,
    private readonly emailService: EmailService,
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, email, password } = createUserDto;

    const user = new User();
    user.username = username;
    user.email = email;
    user.password = password;
    user.verificationToken = this.generateToken(15);

    // Generate a verification token (you can use a library like uuid)
    return await this.userRepo.save(user);

    // Send a verification email

    // this.emailService.sendVerificationEmail({
    //   email: savedUser.email,
    //   verificationToken: savedUser.verificationToken,
    // });
  }

  async signIn(loginUserDto: LoginUserDto): Promise<{ accessToken: string }> {
    const user = await this.userRepo.findOne({
      where: { email: loginUserDto.email },
    });

    console.log(user);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const isMatch = await bcrypt.compare(loginUserDto.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { username: user.username, id: user.id };
    return {
      accessToken: this.jwtService.sign(payload, {
        secret: 'test',
      }),
    };
  }

  async verifyEmail(verificationToken: string): Promise<boolean> {
    // Find the user by ID and verification token
    const user = await this.userRepo.findOne({
      where: { verificationToken: verificationToken },
    });

    if (!user) {
      // User not found or token is invalid
      return false;
    }

    // Mark the user's email as verified
    user.verifiedAt = new Date();
    user.verificationToken = null; // Clear the verification token
    await this.userRepo.save(user);

    return true;
  }

  generateToken(length: number): string {
    if (length <= 0) {
      throw new Error('Length must be greater than zero');
    }

    const bytes = Math.ceil(length / 2); // Each byte represents 2 hexadecimal characters
    const randomBytesBuffer = randomBytes(bytes);
    const randomString = randomBytesBuffer.toString('hex').slice(0, length);

    return randomString;
  }
}
