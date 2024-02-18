import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlightService } from './flight.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Flight Booking')
@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Post()
  searchFlight(@Body() createFlightDto: CreateFlightDto) {
    return this.flightService.searchFlight(createFlightDto);
  }

}
