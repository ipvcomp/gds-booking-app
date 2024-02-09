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
exports.CreateBookingDto = exports.contactDto = exports.flightDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class flightDto {
}
exports.flightDto = flightDto;
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'BA' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], flightDto.prototype, "carrierCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '333' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], flightDto.prototype, "flightNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'LHR' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], flightDto.prototype, "departureFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Hetrow Airport' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], flightDto.prototype, "departureAirPort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: Date.now() }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], flightDto.prototype, "departureTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'JFK' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], flightDto.prototype, "arrivalTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'JOHN F Kennedy' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], flightDto.prototype, "arrivalAirPort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: Date.now() }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], flightDto.prototype, "arrivalTime", void 0);
class paxModel {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: "KAYES FAHIM" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], paxModel.prototype, "givenName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "FUAD" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], paxModel.prototype, "surName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "Male" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], paxModel.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "2011-01-01" }),
    __metadata("design:type", Date)
], paxModel.prototype, "dob", void 0);
class passengerInfoModel {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: [paxModel] }),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ArrayMaxSize)(9),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], passengerInfoModel.prototype, "adult", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "{}" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ArrayMaxSize)(8),
    __metadata("design:type", Array)
], passengerInfoModel.prototype, "child", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "{}" }),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ArrayMaxSize)(4),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], passengerInfoModel.prototype, "infant", void 0);
class contactDto {
}
exports.contactDto = contactDto;
__decorate([
    (0, swagger_1.ApiProperty)({ default: "abc@gmail.com" }),
    __metadata("design:type", String)
], contactDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "+4401685370455" }),
    __metadata("design:type", String)
], contactDto.prototype, "phone", void 0);
class CreateBookingDto {
}
exports.CreateBookingDto = CreateBookingDto;
__decorate([
    (0, swagger_1.ApiProperty)({ default: contactDto }),
    __metadata("design:type", contactDto)
], CreateBookingDto.prototype, "contactInfo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: passengerInfoModel }),
    __metadata("design:type", passengerInfoModel)
], CreateBookingDto.prototype, "passengerInfo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: flightDto }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => flightDto),
    __metadata("design:type", flightDto)
], CreateBookingDto.prototype, "flightInfo", void 0);
//# sourceMappingURL=create-booking.dto.js.map