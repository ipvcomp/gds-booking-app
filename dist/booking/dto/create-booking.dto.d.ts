export declare class flightDto {
    carrierCode: string;
    flightNumber: number;
    departureFrom: string;
    departureAirPort: string;
    departureTime: string;
    arrivalTo: string;
    arrivalAirPort: string;
    arrivalTime: string;
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
