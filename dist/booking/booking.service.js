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
        const paxData = {
            givenName: 'John',
            surName: 'Doe',
            gender: 'Male',
            dob: new Date('1990-01-01'),
        };
        const flightData = {
            carrierCode: 'XYZ',
            flightNumber: 123,
            departureFrom: 'ABC',
            departureAirPort: 'Airport1',
            departureTime: new Date('2022-01-01T10:00:00'),
            arrivalTo: 'DEF',
            arrivalAirPort: 'Airport2',
            arrivalTime: new Date('2022-01-01T12:00:00'),
        };
        const bookingData = {
            bookingRef: 'ABC123',
            email: 'john.doe@example.com',
            phone: '+123456789',
            pnr: 'XYZ789',
            adult: 2,
            child: 1,
            infant: 0,
            flightDate: new Date('2022-01-01'),
        };
        const createBookingEntityDocument = await this.createBookingEntityModel.create(bookingData);
        return createBookingEntityDocument;
    }
    async findAll() {
        const createBookingEntityDocument = await this.createBookingEntityModel.find();
        return createBookingEntityDocument;
    }
    findOne(id) {
        return `This action returns a #${id} booking`;
    }
    update(id, updateBookingDto) {
        return `This action updates a #${id} booking`;
    }
    remove(id) {
        return `This action removes a #${id} booking`;
    }
};
exports.BookingService = BookingService;
exports.BookingService = BookingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(booking_entity_1.createPaxModelEntity.name)),
    __param(1, (0, mongoose_1.InjectModel)(booking_entity_1.createFlightEntity.name)),
    __param(2, (0, mongoose_1.InjectModel)(booking_entity_1.createBookingEntity.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], BookingService);
//# sourceMappingURL=booking.service.js.map