import { Module } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { SubscriberController } from './subscriber.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscriber } from './subscriber.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subscriber])],
  providers: [SubscriberService],
  exports:[],
  controllers: [SubscriberController]
})
export class SubscriberModule {}
