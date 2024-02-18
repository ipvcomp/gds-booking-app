import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './booking/booking.module';
import { DatabaseModule } from './database/database.module';
import { FlightModule } from './flight/flight.module';

@Module({
  imports: [BookingModule, DatabaseModule, FlightModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
