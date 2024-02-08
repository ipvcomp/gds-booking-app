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
exports.CreateBookingDto = exports.JourneyDto = exports.SementDetailsDto = exports.FlightInfoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class FlightInfoDto {
}
exports.FlightInfoDto = FlightInfoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ default: "ChannelId" }),
    __metadata("design:type", String)
], FlightInfoDto.prototype, "channelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "customerReference" }),
    __metadata("design:type", String)
], FlightInfoDto.prototype, "customerReference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "bookingEmailAddress" }),
    __metadata("design:type", String)
], FlightInfoDto.prototype, "bookingEmailAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "thirdPartyCustomerIdentification" }),
    __metadata("design:type", String)
], FlightInfoDto.prototype, "thirdPartyCustomerIdentification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "travelMode" }),
    __metadata("design:type", String)
], FlightInfoDto.prototype, "travelMode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "bookingReference" }),
    __metadata("design:type", String)
], FlightInfoDto.prototype, "bookingReference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "termsOfService" }),
    __metadata("design:type", String)
], FlightInfoDto.prototype, "termsOfService", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "iPAddress" }),
    __metadata("design:type", String)
], FlightInfoDto.prototype, "iPAddress", void 0);
class SementDetailsDto {
}
exports.SementDetailsDto = SementDetailsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ default: "DAC" }),
    __metadata("design:type", String)
], SementDetailsDto.prototype, "airportCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "Dhaka Int Airport" }),
    __metadata("design:type", String)
], SementDetailsDto.prototype, "airportName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "1" }),
    __metadata("design:type", String)
], SementDetailsDto.prototype, "gate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "2024-12-01" }),
    __metadata("design:type", Date)
], SementDetailsDto.prototype, "dateLocal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "12:45" }),
    __metadata("design:type", Date)
], SementDetailsDto.prototype, "timeLocal", void 0);
class JourneyDto {
}
exports.JourneyDto = JourneyDto;
__decorate([
    (0, swagger_1.ApiProperty)({ default: "12:45" }),
    __metadata("design:type", SementDetailsDto)
], JourneyDto.prototype, "departureDetails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "12:45" }),
    __metadata("design:type", SementDetailsDto)
], JourneyDto.prototype, "arrivalDetails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "12:45" }),
    __metadata("design:type", String)
], JourneyDto.prototype, "carrierCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "12:45" }),
    __metadata("design:type", String)
], JourneyDto.prototype, "carrierName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "12:45" }),
    __metadata("design:type", String)
], JourneyDto.prototype, "flightNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "1" }),
    __metadata("design:type", String)
], JourneyDto.prototype, "legId", void 0);
class CreateBookingDto {
}
exports.CreateBookingDto = CreateBookingDto;
__decorate([
    (0, swagger_1.ApiProperty)({ default: "1eyuiqfudcbskjhs" }),
    __metadata("design:type", Object)
], CreateBookingDto.prototype, "_id", void 0);
//# sourceMappingURL=create-booking.dto.js.map