import { Injectable } from '@nestjs/common';
import { CreateCheckDto } from 'src/checks/dto/create-check.dto';
import { CreateReportDto } from 'src/reports/dto/create-report.dto';
import { ReportsService } from 'src/reports/reports.service';
import Monitor from 'ping-monitor';
import SlackChannel from '@ping-monitor/slack';
import EmailChannel from '@ping-monitor/email';

@Injectable()
export class MonitorService {
  constructor(private readonly reportsService: ReportsService) {}
  startPollig(createCheckDto: CreateCheckDto, CheckId) {
    const monitor = new Monitor(createCheckDto);

    monitor.on('up', (res) => {
      // Send data to the ReportService
      const uptimeData: CreateReportDto = {
        checkId: CheckId,
        url: res.website,
        status: 'up',
        availability: res.availability,
        outages: res.outages,
        downtime: res.downtime,
        uptime: res.uptime,
        responseTime: res.responseTime,
        history: {
          timeStamp: new Date(),
          logs: res.logs,
        },
      };

      this.reportsService.create(uptimeData);

      // Send notifications via Slack and Email
      this.sendSlackNotification(`Server ${res.website} is up.`);
      this.sendEmailNotification(`Server ${res.website} is up.`);
    });

    monitor.on('down', (res) => {
      // Send data to the reportsService
      const downtimeData: CreateReportDto = {
        checkId: CheckId,
        url: res.website,
        status: 'down',
        availability: res.availability,
        outages: res.outages,
        downtime: res.downtime,
        uptime: res.uptime,
        responseTime: res.responseTime,
        history: {
          timeStamp: new Date(),
          logs: res.logs,
        },
      };

      this.reportsService.create(downtimeData);

      // Send notifications via Slack and Email
      this.sendSlackNotification(`Server ${res.website} is down.`);
      this.sendEmailNotification(`Server ${res.website} is down.`);
    });
  }
  sendSlackNotification(arg0: string) {
    throw new Error('Method not implemented.');
  }
  sendEmailNotification(arg0: string) {
    throw new Error('Method not implemented.');
  }
}
