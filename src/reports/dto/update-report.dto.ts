import {
  IsOptional,
  IsString,
  IsNumber,
  IsDate,
  IsArray,
  ValidateNested,
} from 'class-validator';

export class UpdateReportDto {
  @IsOptional()
  @IsString()
  checkId?: string;

  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsNumber()
  availability?: number;

  @IsOptional()
  @IsNumber()
  outages?: number;

  @IsOptional()
  @IsNumber()
  downtime?: number;

  @IsOptional()
  @IsNumber()
  uptime?: number;

  @IsOptional()
  @IsNumber()
  responseTime?: number;

  @IsOptional()
  @ValidateNested()
  @IsArray()
  history?: historyDto[];
}

export class historyDto {
  @IsOptional()
  @IsDate()
  timeStamp?: Date;
  @IsOptional()
  @IsArray()
  logs?: Record<string, any>[];
}
