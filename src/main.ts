import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options:{
      port:configService.get('SERVER_PORT')
    }
  })
  // await app.listen(4000,()=>{
  //   console.log('Server is running on http://localhost:4000');
  // });

  app.startAllMicroservices().then(()=>{
    console.log('Microservice is listening');
  })
}
bootstrap();
