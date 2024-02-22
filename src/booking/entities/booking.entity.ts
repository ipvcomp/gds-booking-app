// booking.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
  collection: 'bookings'
})

export class createPaxEntity extends Document {
  @Prop({ required: true })
  bookingRef: string;

  @Prop({ required: true })
  givenName: string;

  @Prop({ required: true })
  surName: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  dob: string;


}

export const createPaxModelSchema = SchemaFactory.createForClass(createPaxEntity);


@Schema({
  timestamps: true,
  collection: 'flights'
})
export class createFlightEntity extends Document {

  @Prop({ required: true })
  legId: number;

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
  departureDateLocal: string;

  @Prop({ required: true })
  departureTimeLocal: string;

  @Prop({ required: true })
  arrivalTo: string;

  @Prop({ required: true })
  arrivalAirPort: string;

  @Prop({ required: true })
  arrivalDateLocal: string;

  @Prop({ required: true })
  arrivalTimeLocal: string;
}

export const createFlightSchema = SchemaFactory.createForClass(createFlightEntity);


@Schema({
  timestamps: true,
  collection: 'passengers'
})
export class createBookingEntity extends Document {

  @Prop({ required: true })
  bookingRef: string;

  @Prop({ required: true })
  system: string;

  @Prop({ required: true })
  officeId: string;

  @Prop({ required: true })
  PCC: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  pnr: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  adult: number;

  @Prop({ required: true })
  child: number;

  @Prop({ required: true })
  infant: number;

  @Prop({ required: true })
  flightDate: string;

  @Prop({ required: true })
  buId: string;

}

export const createBookingSchema = SchemaFactory.createForClass(createBookingEntity);
