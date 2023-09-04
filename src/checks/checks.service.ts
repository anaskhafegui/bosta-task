import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Check } from './entities/check.entity';
import { CreateCheckDto } from './dto/create-check.dto';
import { UpdateCheckDto } from './dto/update-check.dto';

@Injectable()
export class ChecksService {
  constructor(
    @InjectRepository(Check) private readonly checkRepo: Repository<Check>,
  ) {}

  async create(createCheckDto: CreateCheckDto): Promise<Check> {
    const check = this.checkRepo.create(createCheckDto);
    return await this.checkRepo.save(check);
  }

  async findAll(): Promise<Check[]> {
    return await this.checkRepo.find();
  }

  async findOne(id: number): Promise<Check> {
    return await this.checkRepo.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateCheckDto: UpdateCheckDto): Promise<Check> {
    const existingCheck = await this.checkRepo.findOne({
      where: {
        id: id,
      },
    });

    // Update the properties of the existing check
    Object.assign(existingCheck, updateCheckDto);

    return await this.checkRepo.save(existingCheck);
  }

  async remove(id: number): Promise<void> {
    const existingCheck = await this.checkRepo.findOne({
      where: {
        id: id,
      },
    });
    await this.checkRepo.remove(existingCheck);
  }
}
