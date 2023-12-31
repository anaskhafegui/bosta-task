import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './jwt-auth-guard';
import { JwtStrategy } from './jwt-strategy';

@Module({
  imports: [
    JwtModule.register({}), // Configure JWT here
  ],
  controllers: [],
  providers: [JwtAuthGuard, JwtStrategy],
  exports: [JwtAuthGuard, JwtStrategy],
})
export class AuthModule {}
