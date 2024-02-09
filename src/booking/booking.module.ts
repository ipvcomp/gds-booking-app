import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateBookingSchema } from './entities/booking.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Booking', schema: CreateBookingSchema }]),
  ],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
