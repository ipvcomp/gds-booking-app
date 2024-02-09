export declare class FlightDto {
    carrierCode: string;
    flightNumber: number;
    departureFrom: string;
    departureAirPort: string;
    departureTime: Date;
    arrivalTo: string;
    arrivalAirPort: string;
    arrivalTime: Date;
}
declare class PaxModel {
    givenName: string;
    surName: string;
    gender: string;
    dob: Date;
    document: string;
    expireDate: Date;
    nationality: string;
}
declare class PassengerInfoModel {
    adult: PaxModel[];
    child: [];
    infant: [];
}
export declare class ContactDto {
    email: string;
    phone: string;
}
export declare class CreateBookingDto {
    contactInfo: ContactDto;
    passengerInfo: PassengerInfoModel;
    flightInfo: FlightDto;
}
export {};
