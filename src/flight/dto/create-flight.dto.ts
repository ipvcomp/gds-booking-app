import { IsInt, IsPositive, IsString, Length, ArrayMinSize, IsDateString, ArrayMaxSize, IsArray, IsOptional, IsNotEmpty, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class segmentDto {
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

export class createFlightDto {
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

  @ApiProperty({ type: [segmentDto] })
  @ArrayMinSize(1)
  @ArrayMaxSize(4)
  segments: segmentDto[];
}

export class createOfferDto{
  
}

class paxBookingModel {
  @ApiProperty({default: "KAYES FAHIM"})
  @IsString()
  givenName: string;

  @ApiProperty({default: "FUAD"})
  @IsString()
  surName: string;

  @ApiProperty({default: "Male"})
  @IsString()
  gender: string;

  @ApiProperty({default: "1998-01-01"})
  @IsDate()
  dob: Date;

  @ApiProperty({default: "A09726272"})
  @IsString()
  documentNumber: string;

  @ApiProperty({default: "2032-01-01"})
  @IsString()
  documentExpireDate: Date;

  @ApiProperty({default: "BD"})
  @IsString()
  nationality: string;


}

class paxBookingInfoModel {
  @ApiProperty({ type: [paxBookingModel] })
  @ArrayMinSize(1)
  @ArrayMaxSize(9)
  @IsArray()
  adult: paxBookingModel[];

  @ApiProperty({default: {}})
  @IsOptional()
  @ArrayMinSize(1)
  @ArrayMaxSize(8)
  child: paxBookingModel[];

  @ApiProperty({default: {}})
  @ArrayMinSize(1)
  @ArrayMaxSize(4)
  @IsOptional()
  infant: paxBookingModel[];
}

export class contactBookingDto{

  @ApiProperty({default: "abc@gmail.com"})
  email: string;

  @ApiProperty({default: "+4401685370455"})
  phone: string;

}

export class createFlightBookingDto {

  @ApiProperty({default: contactBookingDto})
  contactInfo : contactBookingDto;

  @ApiProperty({default: paxBookingInfoModel})
  passengerInfo: paxBookingInfoModel; 

  @ApiProperty({default: '{}'})
  flightInfo: any;
}