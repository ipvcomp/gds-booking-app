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

  @Get('all')
  findAll() {
    return this.bookingService.findAll();
  }

  @Get('amadeus/all')
  findAllByAmadeus() {
    return this.bookingService.findAllByAmadeus();
  }

  @Get('page/:pageNumber')
  findByPagination(
    @Param('pageNumber') pageNumber: number){
    return this.bookingService.findByPagination(pageNumber);
  }

  @Get(':pnr')
  findOneByPnr(@Param('pnr') pnr: string) {
    return this.bookingService.findOneByPnr(pnr);
  }





}
