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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBookingSchema = exports.createBookingEntity = exports.createFlightSchema = exports.createFlightEntity = exports.createPaxModelSchema = exports.createPaxEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let createPaxEntity = class createPaxEntity extends mongoose_2.Document {
};
exports.createPaxEntity = createPaxEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], createPaxEntity.prototype, "bookingRef", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], createPaxEntity.prototype, "givenName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], createPaxEntity.prototype, "surName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], createPaxEntity.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], createPaxEntity.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], createPaxEntity.prototype, "dob", void 0);
exports.createPaxEntity = createPaxEntity = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        collection: 'bookings'
    })
], createPaxEntity);
exports.createPaxModelSchema = mongoose_1.SchemaFactory.createForClass(createPaxEntity);
let createFlightEntity = class createFlightEntity extends mongoose_2.Document {
};
exports.createFlightEntity = createFlightEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], createFlightEntity.prototype, "legId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], createFlightEntity.prototype, "bookingRef", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], createFlightEntity.prototype, "carrierCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], createFlightEntity.prototype, "flightNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], createFlightEntity.prototype, "departureFrom", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], createFlightEntity.prototype, "departureAirPort", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], createFlightEntity.prototype, "departureTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], createFlightEntity.prototype, "arrivalTo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], createFlightEntity.prototype, "arrivalAirPort", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], createFlightEntity.prototype, "arrivalTime", void 0);
exports.createFlightEntity = createFlightEntity = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        collection: 'flights'
    })
], createFlightEntity);
exports.createFlightSchema = mongoose_1.SchemaFactory.createForClass(createFlightEntity);
let createBookingEntity = class createBookingEntity extends mongoose_2.Document {
};
exports.createBookingEntity = createBookingEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], createBookingEntity.prototype, "bookingRef", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], createBookingEntity.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], createBookingEntity.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], createBookingEntity.prototype, "pnr", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], createBookingEntity.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], createBookingEntity.prototype, "adult", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], createBookingEntity.prototype, "child", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], createBookingEntity.prototype, "infant", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], createBookingEntity.prototype, "flightDate", void 0);
exports.createBookingEntity = createBookingEntity = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        collection: 'passengers'
    })
], createBookingEntity);
exports.createBookingSchema = mongoose_1.SchemaFactory.createForClass(createBookingEntity);
//# sourceMappingURL=booking.entity.js.map