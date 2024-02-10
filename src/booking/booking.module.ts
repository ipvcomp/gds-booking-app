import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { createPaxModelSchema, createFlightSchema, createBookingSchema } from './entities/booking.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'createPaxEntity', schema: createPaxModelSchema },
      { name: 'createFlightEntity', schema: createFlightSchema },
      { name: 'createBookingEntity', schema: createBookingSchema }
      ])],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
