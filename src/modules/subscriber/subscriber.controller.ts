import { Controller } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('subscriber')
export class SubscriberController {
    constructor(
        private readonly subscriberService: SubscriberService,
    ) {}

    @MessagePattern({ cmd: 'getSubscribers' })
    getAllSubscribers() {
        return this.subscriberService.getSubscribers();
    }

    @MessagePattern({ cmd: 'addSubscriber' })
    addSubscriber(subscriberDto: any) {
        return this.subscriberService.addSubscriber(subscriberDto);
    }
    
}
