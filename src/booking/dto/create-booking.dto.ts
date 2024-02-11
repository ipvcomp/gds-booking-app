import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, IsNumber, IsDate, IsOptional, IsObject, ArrayMinSize, ArrayMaxSize, IsArray, ValidateNested, IsInt } from 'class-validator';

export class flightDto {

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

  @ApiProperty({default: "2024-04-12T12:40:00"})
  @IsString()
  departureTime: string;

  @ApiProperty({default: 'JFK'})
  @IsString()
  arrivalTo: string;

  @ApiProperty({default: 'JOHN F Kennedy'})
  @IsString()
  arrivalAirPort: string;

  @ApiProperty({default: "2024-04-12T02:40:00"})
  @IsString()
  arrivalTime: string;

}

class paxModel {
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

}

class passengerInfoModel {
  @ApiProperty({ type: [paxModel] })
  @ArrayMinSize(1)
  @ArrayMaxSize(9)
  @IsArray()
  adult: paxModel[];

  @ApiProperty({type: [paxModel]})
  @IsOptional()
  @ArrayMinSize(1)
  @ArrayMaxSize(8)
  child: paxModel[];

  @ApiProperty({type: [paxModel]})
  @ArrayMinSize(1)
  @ArrayMaxSize(4)
  @IsOptional()
  infant: paxModel[];
}

export class contactDto{

  @ApiProperty({default: "abc@gmail.com"})
  email: string;

  @ApiProperty({default: "+4401685370455"})
  phone: string;

}

export class CreateBookingDto {

  @ApiProperty({default: contactDto})
  contactInfo : contactDto;

  @ApiProperty({default: passengerInfoModel})
  passengerInfo: passengerInfoModel; 

  @ApiProperty({ type: [flightDto] })
  @ValidateNested({ each: true })
  @Type(() => flightDto)
  @ArrayMinSize(1)
  @ArrayMaxSize(9)
  @IsArray()
  flightInfo: flightDto[];
}

  