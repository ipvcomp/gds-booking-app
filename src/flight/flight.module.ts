import { Module } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { BookingService } from 'src/booking/booking.service';
import { MongooseModule } from '@nestjs/mongoose';
import { createBookingSchema, createFlightSchema, createPaxModelSchema } from 'src/booking/entities/booking.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'createPaxEntity', schema: createPaxModelSchema },
      { name: 'createFlightEntity', schema: createFlightSchema },
      { name: 'createBookingEntity', schema: createBookingSchema }
      ])],
  controllers: [FlightController],
  providers: [FlightService, BookingService],
})
export class FlightModule {}
