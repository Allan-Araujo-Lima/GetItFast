import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class SignInDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  password: string;
}
