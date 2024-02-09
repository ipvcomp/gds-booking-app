export declare class flightDto {
    carrierCode: string;
    flightNumber: number;
    departureFrom: string;
    departureAirPort: string;
    departureTime: Date;
    arrivalTo: string;
    arrivalAirPort: string;
    arrivalTime: Date;
}
declare class paxModel {
    givenName: string;
    surName: string;
    gender: string;
    dob: Date;
}
declare class passengerInfoModel {
    adult: paxModel[];
    child: [];
    infant: [];
}
export declare class contactDto {
    email: string;
    phone: string;
}
export declare class CreateBookingDto {
    contactInfo: contactDto;
    passengerInfo: passengerInfoModel;
    flightInfo: flightDto;
}
export {};
