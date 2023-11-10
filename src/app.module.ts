import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AxiosModule } from './axios/axios.module';

import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
  imports: [
    AxiosModule,
    HttpModule.register({
      timeout: 5000,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
