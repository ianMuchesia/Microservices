import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { Subscriber } from './subscriber.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubscriberService {
  constructor(
    @InjectRepository(Subscriber)
    private subscriberRepo: Repository<Subscriber>,
  ) {}

  public async getSubscribers() {
    return await this.subscriberRepo.find();
  }

  public async addSubscriber(subscriberDto: CreateSubscriberDto) {
    const newSubscriber = this.subscriberRepo.create(subscriberDto);
    await this.subscriberRepo.save(newSubscriber);
    return newSubscriber;
  }
}
