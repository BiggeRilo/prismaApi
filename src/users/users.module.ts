import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRepository } from './repository/user.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserRepository, PrismaService],
})
export class UsersModule {}
