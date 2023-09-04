import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('checks')
export class Check {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  userId: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  url: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  protocol: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  path: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  port: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  webhook: string;

  @Column({ type: 'int', default: 5 * 1000 })
  timeout: number;

  @Column({ type: 'int', default: 10 * 1000 * 60 })
  interval: number;

  @Column({ type: 'int', default: 1 })
  threshold: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password: string;

  @Column({ type: 'json', nullable: true })
  httpHeaders: { key: string; value: string }[];

  @Column({ type: 'int', nullable: true })
  statusCode: number;

  @Column({ type: 'boolean', default: false })
  ignoreSSL: boolean;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'boolean', default: false })
  invokeHook: boolean;

  @Column({ type: 'json', nullable: true })
  authentication: {
    username: string;
    password: string;
  }[];
}
