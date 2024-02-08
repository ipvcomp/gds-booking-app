export declare class FlightInfoDto {
    channelId: string;
    customerReference: string;
    bookingEmailAddress: string;
    thirdPartyCustomerIdentification: string;
    travelMode: string;
    bookingReference: string;
    termsOfService: string;
    iPAddress: string;
}
export declare class SementDetailsDto {
    airportCode: string;
    airportName: string;
    gate: string;
    dateLocal: Date;
    timeLocal: Date;
}
export declare class JourneyDto {
    departureDetails: SementDetailsDto;
    arrivalDetails: SementDetailsDto;
    carrierCode: string;
    carrierName: string;
    flightNumber: string;
    legId: string;
}
export declare class CreateBookingDto {
    _id: {
        $oid: string;
    };
    flightInfo: FlightInfoDto;
    Journey: JourneyDto[];
    _class: string;
}
