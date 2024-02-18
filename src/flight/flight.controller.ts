import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlightService } from './flight.service';
import { CreateBookingDto, CreateFlightDto, CreateOfferDto } from './dto/create-flight.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Flight Booking')
@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Post('search')
  searchFlight(@Body() createFlightDto: CreateFlightDto) {
    return this.flightService.searchFlight(createFlightDto);
  }

  @Post('price')
  offerPrice(@Body() offerPrice: CreateOfferDto){
    return this.flightService.offerFlight(offerPrice); 

  }

  @Post('booking')
  bookingFlight(@Body() bookingDto: CreateBookingDto){
    return this.flightService.bookingFlight(bookingDto); 
  }

}
