import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ChecksService } from './checks.service';
import { CreateCheckDto } from './dto/create-check.dto';
import { UpdateCheckDto } from './dto/update-check.dto';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';

@Controller('checks')
@UseGuards(JwtAuthGuard)
export class ChecksController {
  constructor(private readonly checksService: ChecksService) {}

  @Post('/create')
  create(@Body() createCheckDto: CreateCheckDto) {
    return this.checksService.create(createCheckDto);
  }

  @Get('/findall')
  findAll() {
    return this.checksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.checksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCheckDto: UpdateCheckDto) {
    return this.checksService.update(id, updateCheckDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.checksService.remove(id);
  }
}
