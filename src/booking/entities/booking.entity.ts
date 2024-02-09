// booking.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PaxModelEntity {
  @Prop({ required: true })
  givenName: string;

  @Prop({ required: true })
  surName: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  dob: Date;

  @Prop({ required: true })
  document: string;

  @Prop({ required: true })
  expireDate: Date;

  @Prop({ required: true })
  nationality: string;
}

@Schema()
export class PassengerInfoModelEntity {
  @Prop({ type: [PaxModelEntity], required: true })
  adult: PaxModelEntity[];

  @Prop({ type: [{}], required: true, default: [] })
  child: [];

  @Prop({ type: [{}], required: true, default: [] })
  infant: [];
}

@Schema()
export class ContactEntity {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;
}

@Schema()
export class FlightEntity {
  @Prop({ required: true })
  carrierCode: string;

  @Prop({ required: true })
  flightNumber: number;

  @Prop({ required: true })
  departureFrom: string;

  @Prop({ required: true })
  departureAirPort: string;

  @Prop({ required: true })
  departureTime: Date;

  @Prop({ required: true })
  arrivalTo: string;

  @Prop({ required: true })
  arrivalAirPort: string;

  @Prop({ required: true })
  arrivalTime: Date;
}

@Schema()
export class CreateBookingEntity extends Document {
  @Prop({ type: ContactEntity, required: true })
  contactInfo: ContactEntity;

  @Prop({ type: PassengerInfoModelEntity, required: true })
  passengerInfo: PassengerInfoModelEntity;

  @Prop({ type: FlightEntity, required: true })
  flightInfo: FlightEntity;
}

export const CreateBookingSchema = SchemaFactory.createForClass(CreateBookingEntity);
