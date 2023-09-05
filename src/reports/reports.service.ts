import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report) private readonly reportRepo: Repository<Report>,
  ) {}
  async create(createReportDto: CreateReportDto) {
    const newReport = this.reportRepo.create(createReportDto);
    return await this.reportRepo.save(newReport);
  }

  async findAll(): Promise<Report[]> {
    return await this.reportRepo.find();
  }

  async findOne(id: number): Promise<Report> {
    const report = await this.reportRepo.findOne(id);
    if (!report) {
      throw new NotFoundException(`Report with ID ${id} not found`);
    }
    return report;
  }

  async update(id: number, updateReportDto: UpdateReportDto): Promise<Report> {
    const report = await this.reportRepo.findOne(id);
    if (!report) {
      throw new NotFoundException(`Report with ID ${id} not found`);
    }

    // Update report properties based on updateReportDto
    if (updateReportDto.checkId !== undefined) {
      report.checkId = updateReportDto.checkId;
    }
    // Add more property updates as needed

    return await this.reportRepo.save(report);
  }

  async remove(id: number): Promise<void> {
    const report = await this.reportRepo.findOne(id);
    if (!report) {
      throw new NotFoundException(`Report with ID ${id} not found`);
    }

    await this.reportRepo.remove(report);
  }
}
