import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  ManyToOne,
} from 'typeorm';

@Entity('report')
@Unique(['checkId'])
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  checkId: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  url: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  status: string;

  @Column({ type: 'float', nullable: true })
  availability: number;

  @Column({ type: 'integer', nullable: true })
  outages: number;

  @Column({ type: 'float', nullable: true })
  downtime: number;

  @Column({ type: 'float', nullable: true })
  uptime: number;

  @Column({ type: 'float', nullable: true })
  responseTime: number;

  @Column({ type: 'json', nullable: true })
  history: { timeStamp: Date; logs: Record<string, any>[] };
}
