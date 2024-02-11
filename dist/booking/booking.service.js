"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const booking_entity_1 = require("./entities/booking.entity");
let BookingService = class BookingService {
    constructor(createPaxModelEntityModel, createFlightEntityModel, createBookingEntityModel) {
        this.createPaxModelEntityModel = createPaxModelEntityModel;
        this.createFlightEntityModel = createFlightEntityModel;
        this.createBookingEntityModel = createBookingEntityModel;
    }
    async create(createBookingDto) {
        const flightList = createBookingDto.flightInfo;
        console.log(flightList);
        const passengerInfo = createBookingDto.passengerInfo;
        const adultList = passengerInfo.adult;
        const childList = passengerInfo.child;
        const infantList = passengerInfo.infant;
        const lastBookingRef = await this.createBookingEntityModel
            .findOne({}, { bookingRef: true, _id: false })
            .sort({ createdAt: -1 })
            .limit(1);
        let bookingRef = '';
        if (lastBookingRef) {
            bookingRef = `B${parseInt(lastBookingRef?.bookingRef.replace('B', ''), 10) + 1}`;
        }
        else {
            bookingRef = 'B1000';
        }
        const bookingData = {
            bookingRef: bookingRef,
            email: createBookingDto.contactInfo.email,
            phone: createBookingDto.contactInfo.phone,
            pnr: generateRandomString(6),
            status: 'Hold',
            adult: adultList?.length || 1,
            child: childList?.length || 0,
            infant: infantList?.length || 0,
            flightDate: (flightList[0].departureTime).slice(0, 10),
        };
        const createBookingEntityDocument = await this.createBookingEntityModel.create(bookingData);
        let i = 0;
        for (const flight of flightList) {
            i++;
            const flightData = {
                bookingRef: bookingRef,
                legId: i,
                carrierCode: flight.carrierCode,
                flightNumber: flight.flightNumber,
                departureFrom: flight.departureFrom,
                departureAirPort: flight.departureAirPort,
                departureTime: flight.departureTime,
                arrivalTo: flight.arrivalTo,
                arrivalAirPort: flight.arrivalAirPort,
                arrivalTime: flight.arrivalTime,
            };
            await this.createFlightEntityModel.create(flightData);
        }
        if (adultList.length > 0) {
            for (const adultPax of adultList) {
                const paxData = {
                    bookingRef: bookingRef,
                    givenName: adultPax.givenName,
                    surName: adultPax.surName,
                    gender: adultPax.gender,
                    dob: adultPax.dob,
                    type: 'ADT'
                };
                await this.createPaxModelEntityModel.create(paxData);
            }
        }
        if (childList.length > 0) {
            for (const childPax of childList) {
                const paxData = {
                    bookingRef: bookingRef,
                    givenName: childPax.givenName,
                    surName: childPax.surName,
                    gender: childPax.gender,
                    dob: childPax.dob,
                    type: 'CNN'
                };
                await this.createPaxModelEntityModel.create(paxData);
            }
        }
        if (infantList.length > 0) {
            for (const infantPax of infantList) {
                const paxData = {
                    bookingRef: bookingRef,
                    givenName: infantPax.givenName,
                    surName: infantPax.surName,
                    gender: infantPax.gender,
                    dob: infantPax.dob,
                    type: 'INF'
                };
                await this.createPaxModelEntityModel.create(paxData);
            }
        }
        return createBookingEntityDocument;
        function generateRandomString(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let result = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                result += characters.charAt(randomIndex);
            }
            return result;
        }
    }
    async findAll() {
        const createBookingEntityDocument = await this.createBookingEntityModel.find();
        return createBookingEntityDocument;
    }
    async findOneByPnr(pnr) {
        const bookingEntityDocument = await this.createBookingEntityModel.findOne({ pnr: pnr });
        const passengerEntityDocument = await this.createPaxModelEntityModel.find({ bookingRef: bookingEntityDocument.bookingRef });
        const flightEntityDocument = await this.createFlightEntityModel.find({ bookingRef: bookingEntityDocument.bookingRef });
        const bookingDetails = {
            bookingInfo: bookingEntityDocument,
            flightInfo: flightEntityDocument,
            passengerInfo: passengerEntityDocument
        };
        return bookingDetails;
    }
};
exports.BookingService = BookingService;
exports.BookingService = BookingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(booking_entity_1.createPaxEntity.name)),
    __param(1, (0, mongoose_1.InjectModel)(booking_entity_1.createFlightEntity.name)),
    __param(2, (0, mongoose_1.InjectModel)(booking_entity_1.createBookingEntity.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], BookingService);
//# sourceMappingURL=booking.service.js.map