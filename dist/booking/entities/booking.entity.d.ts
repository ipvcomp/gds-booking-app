/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
export declare class PaxModelEntity {
    givenName: string;
    surName: string;
    gender: string;
    dob: Date;
    document: string;
    expireDate: Date;
    nationality: string;
}
export declare class PassengerInfoModelEntity {
    adult: PaxModelEntity[];
    child: [];
    infant: [];
}
export declare class ContactEntity {
    email: string;
    phone: string;
}
export declare class FlightEntity {
    carrierCode: string;
    flightNumber: number;
    departureFrom: string;
    departureAirPort: string;
    departureTime: Date;
    arrivalTo: string;
    arrivalAirPort: string;
    arrivalTime: Date;
}
export declare class CreateBookingEntity extends Document {
    contactInfo: ContactEntity;
    passengerInfo: PassengerInfoModelEntity;
    flightInfo: FlightEntity;
}
export declare const CreateBookingSchema: import("mongoose").Schema<CreateBookingEntity, import("mongoose").Model<CreateBookingEntity, any, any, any, Document<unknown, any, CreateBookingEntity> & CreateBookingEntity & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CreateBookingEntity, Document<unknown, {}, import("mongoose").FlatRecord<CreateBookingEntity>> & import("mongoose").FlatRecord<CreateBookingEntity> & {
    _id: import("mongoose").Types.ObjectId;
}>;
