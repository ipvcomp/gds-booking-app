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
exports.CreateBookingSchema = exports.CreateBookingEntity = exports.FlightEntity = exports.ContactEntity = exports.PassengerInfoModelEntity = exports.PaxModelEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PaxModelEntity = class PaxModelEntity {
};
exports.PaxModelEntity = PaxModelEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], PaxModelEntity.prototype, "givenName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], PaxModelEntity.prototype, "surName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], PaxModelEntity.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], PaxModelEntity.prototype, "dob", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], PaxModelEntity.prototype, "document", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], PaxModelEntity.prototype, "expireDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], PaxModelEntity.prototype, "nationality", void 0);
exports.PaxModelEntity = PaxModelEntity = __decorate([
    (0, mongoose_1.Schema)()
], PaxModelEntity);
let PassengerInfoModelEntity = class PassengerInfoModelEntity {
};
exports.PassengerInfoModelEntity = PassengerInfoModelEntity;
__decorate([
    (0, mongoose_1.Prop)({ type: [PaxModelEntity], required: true }),
    __metadata("design:type", Array)
], PassengerInfoModelEntity.prototype, "adult", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{}], required: true, default: [] }),
    __metadata("design:type", Array)
], PassengerInfoModelEntity.prototype, "child", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{}], required: true, default: [] }),
    __metadata("design:type", Array)
], PassengerInfoModelEntity.prototype, "infant", void 0);
exports.PassengerInfoModelEntity = PassengerInfoModelEntity = __decorate([
    (0, mongoose_1.Schema)()
], PassengerInfoModelEntity);
let ContactEntity = class ContactEntity {
};
exports.ContactEntity = ContactEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ContactEntity.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ContactEntity.prototype, "phone", void 0);
exports.ContactEntity = ContactEntity = __decorate([
    (0, mongoose_1.Schema)()
], ContactEntity);
let FlightEntity = class FlightEntity {
};
exports.FlightEntity = FlightEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], FlightEntity.prototype, "carrierCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], FlightEntity.prototype, "flightNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], FlightEntity.prototype, "departureFrom", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], FlightEntity.prototype, "departureAirPort", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], FlightEntity.prototype, "departureTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], FlightEntity.prototype, "arrivalTo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], FlightEntity.prototype, "arrivalAirPort", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], FlightEntity.prototype, "arrivalTime", void 0);
exports.FlightEntity = FlightEntity = __decorate([
    (0, mongoose_1.Schema)()
], FlightEntity);
let CreateBookingEntity = class CreateBookingEntity extends mongoose_2.Document {
};
exports.CreateBookingEntity = CreateBookingEntity;
__decorate([
    (0, mongoose_1.Prop)({ type: ContactEntity, required: true }),
    __metadata("design:type", ContactEntity)
], CreateBookingEntity.prototype, "contactInfo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: PassengerInfoModelEntity, required: true }),
    __metadata("design:type", PassengerInfoModelEntity)
], CreateBookingEntity.prototype, "passengerInfo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: FlightEntity, required: true }),
    __metadata("design:type", FlightEntity)
], CreateBookingEntity.prototype, "flightInfo", void 0);
exports.CreateBookingEntity = CreateBookingEntity = __decorate([
    (0, mongoose_1.Schema)()
], CreateBookingEntity);
exports.CreateBookingSchema = mongoose_1.SchemaFactory.createForClass(CreateBookingEntity);
//# sourceMappingURL=booking.entity.js.map