import { Module } from '@nestjs/common';
import { ChecksService } from './checks.service';
import { ChecksController } from './checks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { Check } from './entities/check.entity';
import { AuthModule } from 'src/auth/auth.module';
import { ReportsModule } from 'src/reports/reports.module';
import { MonitorService } from 'src/monitor/monitor.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([Check]), // Import the User entity
    JwtModule.register({}), // Configure JWT here
    AuthModule,
    ReportsModule,
  ],
  controllers: [ChecksController],
  providers: [ChecksService, MonitorService],
})
export class ChecksModule {}
