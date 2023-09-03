import { IsNotEmpty } from 'class-validator';

export class SendVerifyEmailDto {
  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  verificationToken!: string;
}
