import { Controller, Post, Body, Get, Param} from '@nestjs/common';
import { FlightService } from './flight.service';
import { createFlightDto, createFlightBookingDto, createOfferDto } from './dto/create-flight.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Flight Booking')
@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Post('search')
  searchFlight(@Body() createFlightDto: createFlightDto) {
    return this.flightService.searchFlight(createFlightDto);
  }

  @Post('price')
  offerPrice(@Body() offerPrice: createOfferDto){
    return this.flightService.offerFlight(offerPrice); 

  }

  @Post('booking')
  bookingFlight(@Body() bookingDto: createFlightBookingDto){
    return this.flightService.bookingFlight(bookingDto); 
  }

  @Get(':bookingRef')
  getBooking(
    @Param('bookingRef') bookingRef : string){
    return this.flightService.getBooking(bookingRef);
  }

}
