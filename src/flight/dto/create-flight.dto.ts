import { IsInt, IsPositive, IsString, Length, ArrayMinSize, IsDateString, ArrayMaxSize, ValidateNested, IsEmail, IsArray, IsOptional, IsNotEmpty, MaxLength, maxLength, IsPhoneNumber, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class SegmentDto {
  @ApiProperty({ default: 'LHR' })
  @IsString()
  @IsNotEmpty()
  @Length(3, 3)
  departureFrom: string;

  @ApiProperty({ default: 'JFK' })
  @IsString()
  @IsNotEmpty()
  @Length(3, 3)
  arrivalTo: string;

  @ApiProperty( { default: '2024-03-01' })
  @IsDateString()
  @IsNotEmpty()
  @IsNotEmpty()
  departureDate: string;
}

export class CreateFlightDto {
  @ApiProperty({ default: 1 })
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  adultCount: number;

  @ApiProperty({ default: 0 })
  @IsInt()
  @IsNotEmpty()
  childCount: number;

  @ApiProperty({ default: 0 })
  @IsInt()
  @IsNotEmpty()
  infantCount: number;

  @ApiProperty({ default: 'ECONOMY' })
  @IsNotEmpty()
  @IsString()
  @Length(1, 1)
  cabin_class: string;

  @ApiProperty({ type: [SegmentDto] })
  @ArrayMinSize(1)
  @ArrayMaxSize(4)
  segments: SegmentDto[];
}