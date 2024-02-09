// booking.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class createPaxModelEntity extends Document {
  @Prop({ required: true })
  bookingRef: string;
  
  @Prop({ required: true })
  givenName: string;

  @Prop({ required: true })
  surName: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  dob: Date;

}

export const createPaxModelSchema = SchemaFactory.createForClass(createPaxModelEntity);


@Schema({
  timestamps: true,
})
export class createFlightEntity extends Document {

  @Prop({ required: true })
  bookingRef: string;

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

export const createFlightSchema = SchemaFactory.createForClass(createFlightEntity);


@Schema({
  timestamps: true,
})
export class createBookingEntity extends Document {

  @Prop({ required: true })
  bookingRef: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  pnr: string;

  @Prop({ required: true })
  adult: number;

  @Prop({ required: true })
  child: number;

  @Prop({ required: true })
  infant: number;

  @Prop({ required: true })
  flightDate: Date;

}

export const createBookingSchema = SchemaFactory.createForClass(createBookingEntity);
