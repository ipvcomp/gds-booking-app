import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Booking App Demo')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @Get()
  findAll() {
    return this.bookingService.findAll();
  }

  @Get()
  findByPagination() {
    return this.bookingService.findAll();
  }

  @Get(':pnr')
  findOneByPnr(@Param('pnr') pnr: string) {
    return this.bookingService.findOneByPnr(pnr);
  }





}
