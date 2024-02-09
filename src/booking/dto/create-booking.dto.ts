import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, IsNumber, IsDate, IsOptional, IsObject, ArrayMinSize, ArrayMaxSize, IsArray, ValidateNested } from 'class-validator';

export class FlightDto {

  @ApiProperty({default: 'BA'})
  @IsString()
  carrierCode: string;

  @ApiProperty({default: '333'})
  @IsNumber()
  flightNumber: number;

  @ApiProperty({default: 'LHR'})
  @IsString()
  departureFrom: string;

  @ApiProperty({default: 'Hetrow Airport'})
  @IsString()
  departureAirPort: string;

  @ApiProperty({default: Date.now()})
  @IsDate()
  departureTime: Date;

  @ApiProperty({default: 'JFK'})
  @IsString()
  arrivalTo: string;

  @ApiProperty({default: 'JOHN F Kennedy'})
  @IsString()
  arrivalAirPort: string;

  @ApiProperty({default: Date.now()})
  @IsDate()
  arrivalTime: Date;

}

class PaxModel {
  @ApiProperty({default: "KAYES FAHIM"})
  @IsString()
  givenName: string;

  @ApiProperty({default: "FUAD"})
  @IsString()
  surName: string;

  @ApiProperty({default: "Male"})
  @IsString()
  gender: string;

  @ApiProperty({default: "2011-01-01"})
  dob: Date;

  @ApiProperty({default: "A20932903"})
  @IsString()
  document: string;

  @ApiProperty({default: "2032-01-01"})
  expireDate: Date;

  @ApiProperty({default: "BD"})
  @IsString()
  nationality: string;
}


class PassengerInfoModel {
  @ApiProperty({ type: [PaxModel] })
  @ArrayMinSize(1)
  @ArrayMaxSize(9)
  @IsArray()
  adult: PaxModel[];

  @ApiProperty({default:"{}"})
  @IsOptional()
  @ArrayMinSize(1)
  @ArrayMaxSize(8)
  child: [];

  @ApiProperty({default:"{}"})
  @ArrayMinSize(1)
  @ArrayMaxSize(4)
  @IsOptional()
  infant: [];
}

export class ContactDto{

  @ApiProperty({default: "abc@gmail.com"})
  email: string;

  @ApiProperty({default: "+4401685370455"})
  phone: string;

}


export class CreateBookingDto {

    @ApiProperty({default: ContactDto})
    contactInfo : ContactDto; 
    @ApiProperty({default: PassengerInfoModel})
    passengerInfo: PassengerInfoModel; 
    @ApiProperty({default: FlightDto})
    @ValidateNested({ each: true })
    @Type(() => FlightDto)
    flightInfo : FlightDto;

}

  