import { PartialType } from '@nestjs/swagger';
import { createFlightDto } from './create-flight.dto';

export class UpdateFlightDto extends PartialType(createFlightDto) {}
