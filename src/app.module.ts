import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './common/config/ormConfig';
import { ConfigModule } from '@nestjs/config';
import { EmailModule } from './modules/email/email.module';
import { ExampleModule } from './modules/example/example.module';
import { SubscriberModule } from './modules/subscriber/subscriber.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot(ormConfig()),
    EmailModule,
    ExampleModule,
    SubscriberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
