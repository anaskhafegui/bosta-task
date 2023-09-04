import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEnum,
  IsArray,
  ValidateNested,
  IsBoolean,
  IsOptional,
} from 'class-validator';
import { CheckProtocol } from '../enums/check.protocol';
import { Type } from 'class-transformer';

export class CreateCheckDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  url!: string;

  @IsNotEmpty()
  @IsEnum(CheckProtocol) // Use @IsEnum decorator to validate against the enum
  protocol!: CheckProtocol;

  @IsNumber()
  userId!: string;

  @IsString()
  @IsNotEmpty()
  path: string;

  @IsOptional()
  @IsString()
  port?: string;

  @IsString()
  @IsNotEmpty()
  webhook?: string;

  @IsNumber()
  timeout?: number;

  @IsNumber()
  interval?: number;

  @IsNumber()
  threshold?: number;

  @IsOptional()
  @IsArray()
  tags?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true }) // Use ValidateNested with the Type decorator
  @Type(() => HttpHeaderDto)
  httpHeaders?: HttpHeaderDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => statusCodeDto)
  assert?: statusCodeDto[];

  @IsOptional()
  @IsBoolean()
  ignoreSSL?: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => AuthenticationDto)
  authentication?: AuthenticationDto[];
}

export class HttpHeaderDto {
  @IsString()
  key: string;

  @IsString()
  value: string;
}

export class statusCodeDto {
  statusCode: number;
}

export class AuthenticationDto {
  @IsString()
  username: string;

  @IsString()
  password: string;
}
