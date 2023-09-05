import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';
import { CreateReportDto } from './dto/create-report.dto';

@Module({
  imports: [
    TypeOrmModule.forFeature([Report]), // Import the User entity
    JwtModule.register({}), // Configure JWT here
    AuthModule,
  ],
  controllers: [ReportsController],
  providers: [ReportsService],
  exports: [ReportsService, CreateReportDto],
})
export class ReportsModule {}
