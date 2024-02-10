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
export declare class createPaxEntity extends Document {
    bookingRef: string;
    givenName: string;
    surName: string;
    gender: string;
    dob: Date;
}
export declare const createPaxModelSchema: import("mongoose").Schema<createPaxEntity, import("mongoose").Model<createPaxEntity, any, any, any, Document<unknown, any, createPaxEntity> & createPaxEntity & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, createPaxEntity, Document<unknown, {}, import("mongoose").FlatRecord<createPaxEntity>> & import("mongoose").FlatRecord<createPaxEntity> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare class createFlightEntity extends Document {
    bookingRef: string;
    carrierCode: string;
    flightNumber: number;
    departureFrom: string;
    departureAirPort: string;
    departureTime: Date;
    arrivalTo: string;
    arrivalAirPort: string;
    arrivalTime: Date;
}
export declare const createFlightSchema: import("mongoose").Schema<createFlightEntity, import("mongoose").Model<createFlightEntity, any, any, any, Document<unknown, any, createFlightEntity> & createFlightEntity & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, createFlightEntity, Document<unknown, {}, import("mongoose").FlatRecord<createFlightEntity>> & import("mongoose").FlatRecord<createFlightEntity> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare class createBookingEntity extends Document {
    bookingRef: string;
    email: string;
    phone: string;
    pnr: string;
    status: string;
    adult: number;
    child: number;
    infant: number;
    flightDate: Date;
}
export declare const createBookingSchema: import("mongoose").Schema<createBookingEntity, import("mongoose").Model<createBookingEntity, any, any, any, Document<unknown, any, createBookingEntity> & createBookingEntity & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, createBookingEntity, Document<unknown, {}, import("mongoose").FlatRecord<createBookingEntity>> & import("mongoose").FlatRecord<createBookingEntity> & {
    _id: import("mongoose").Types.ObjectId;
}>;
