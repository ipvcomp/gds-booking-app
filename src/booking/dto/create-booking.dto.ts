import { ApiProperty } from "@nestjs/swagger";
import { Timestamp } from "rxjs";

// flight-info.dto.ts
export class FlightInfoDto {
    @ApiProperty({default: "ChannelId"})
    channelId: string;
    @ApiProperty({default: "customerReference"})
    customerReference: string;
    @ApiProperty({default: "bookingEmailAddress"})
    bookingEmailAddress: string;
    @ApiProperty({default: "thirdPartyCustomerIdentification"})
    thirdPartyCustomerIdentification: string;
    @ApiProperty({default: "travelMode"})
    travelMode: string;
    @ApiProperty({default: "bookingReference"})
    bookingReference: string;
    @ApiProperty({default: "termsOfService"})
    termsOfService: string;
    @ApiProperty({default: "iPAddress"})
    iPAddress: string;
  }
  
  // departure-details.dto.ts
  export class SementDetailsDto {
    @ApiProperty({default: "DAC"})
    airportCode: string;
    @ApiProperty({default: "Dhaka Int Airport"})
    airportName: string;
    @ApiProperty({default: "1"})
    gate: string;
    @ApiProperty({default: "2024-12-01"})
    dateLocal: Date;
    @ApiProperty({default: "12:45"})
    timeLocal: Date;
  }
  

  export class JourneyDto {
    @ApiProperty({default: "12:45"})
    departureDetails: SementDetailsDto;
    @ApiProperty({default: "12:45"})
    arrivalDetails: SementDetailsDto;
    @ApiProperty({default: "12:45"})
    carrierCode: string;
    @ApiProperty({default: "12:45"})
    carrierName: string;
    @ApiProperty({default: "12:45"})
    flightNumber: string;
    @ApiProperty({default: "1"})
    legId: string;
  }
  
  // flight-booking-request.dto.ts
  export class CreateBookingDto {
    @ApiProperty({default: "1eyuiqfudcbskjhs"})
    _id: {
      $oid: string;
    };
    flightInfo: FlightInfoDto;
    Journey: JourneyDto[];
    _class: string;
  }


  