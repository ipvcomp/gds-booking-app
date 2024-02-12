export declare class flightDto {
    carrierCode: string;
    flightNumber: number;
    departureFrom: string;
    departureAirPort: string;
    departureDateLocal: string;
    departureTimeLocal: string;
    arrivalTo: string;
    arrivalAirPort: string;
    arrivalDateLocal: string;
    arrivalTimeLocal: string;
}
declare class paxModel {
    givenName: string;
    surName: string;
    gender: string;
    dob: Date;
}
declare class passengerInfoModel {
    adult: paxModel[];
    child: paxModel[];
    infant: paxModel[];
}
export declare class contactDto {
    email: string;
    phone: string;
}
export declare class CreateBookingDto {
    contactInfo: contactDto;
    passengerInfo: passengerInfoModel;
    flightInfo: flightDto[];
}
export {};
