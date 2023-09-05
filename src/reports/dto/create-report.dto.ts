import {
  IsString,
  IsNumber,
  IsDate,
  IsArray,
  ValidateNested,
  IsOptional,
} from 'class-validator';

export class CreateReportDto {
  @IsString()
  checkId: string;

  @IsString()
  url: string;

  @IsString()
  status: string;

  @IsNumber()
  availability: number;

  @IsNumber()
  outages: number;

  @IsNumber()
  downtime: number;

  @IsNumber()
  uptime: number;

  @IsNumber()
  responseTime: number;

  @ValidateNested()
  @IsArray()
  history!: historyDto;
}

export class historyDto {
  @IsOptional()
  @IsDate()
  timeStamp!: Date;
  @IsOptional()
  @IsArray()
  logs!: Record<string, any>[];
}
