import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: `mysql`,
        host: configService.getOrThrow(`HOST`),
        port: configService.getOrThrow<number>(`PORT`),
        username: configService.getOrThrow(`DB_USERNAME`),
        password: configService.getOrThrow(`DB_PASSWORD`),
        database: configService.getOrThrow(`DB_NAME`),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
