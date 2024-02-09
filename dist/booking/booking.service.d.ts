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
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Model } from 'mongoose';
import { createPaxModelEntity, createFlightEntity, createBookingEntity } from './entities/booking.entity';
export declare class BookingService {
    private createPaxModelEntityModel;
    private createFlightEntityModel;
    private createBookingEntityModel;
    constructor(createPaxModelEntityModel: Model<createPaxModelEntity>, createFlightEntityModel: Model<createFlightEntity>, createBookingEntityModel: Model<createBookingEntity>);
    create(createBookingDto: CreateBookingDto): Promise<import("mongoose").Document<unknown, {}, createBookingEntity> & createBookingEntity & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<createBookingEntity[]>;
    findOne(id: number): string;
    update(id: number, updateBookingDto: UpdateBookingDto): string;
    remove(id: number): string;
}
