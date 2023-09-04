import {
  IsString,
  IsInt,
  IsBoolean,
  IsArray,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateCheckDto {
  @IsOptional() // Make properties optional based on your requirements
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @IsString()
  protocol?: string;

  @IsOptional()
  @IsString()
  port?: string;

  @IsOptional()
  @IsString()
  path?: string;

  @IsOptional()
  @IsString()
  webhook?: string;

  @IsOptional()
  @IsInt()
  timeout?: number;

  @IsOptional()
  @IsInt()
  interval?: number;

  @IsOptional()
  @IsInt()
  threshold?: number;

  @IsArray()
  @ValidateNested({ each: true }) // Use ValidateNested with the Type decorator
  @Type(() => HttpHeaderDto)
  httpHeaders: HttpHeaderDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => statusCodeDto)
  assert: statusCodeDto[];

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsInt()
  statusCode?: number;

  @IsOptional()
  @IsArray()
  tags?: string[];

  @IsOptional()
  @IsBoolean()
  ignoreSSL?: boolean;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @IsBoolean()
  invokeHook?: boolean;

  @IsOptional()
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
