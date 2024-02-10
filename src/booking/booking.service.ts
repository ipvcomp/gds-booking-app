import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createPaxEntity, createFlightEntity, createBookingEntity } from './entities/booking.entity';


@Injectable()
export class BookingService {
  constructor(
    @InjectModel(createPaxEntity.name)
     private createPaxModelEntityModel: Model<createPaxEntity>,
    @InjectModel(createFlightEntity.name)
     private createFlightEntityModel: Model<createFlightEntity>,
    @InjectModel(createBookingEntity.name)
     private createBookingEntityModel: Model<createBookingEntity>,
  ) {}

  async create(createBookingDto: CreateBookingDto) {

    const lastBookingRef = await this.createBookingEntityModel
      .findOne({}, { bookingRef: true, _id: false})
      .sort({ createdAt: -1 })
      .limit(1);

    const bookingRef = `B${parseInt(lastBookingRef?.bookingRef.replace('B', ''), 10) + 1}`;

    const bookingData = {
      bookingRef: bookingRef,
      email: createBookingDto.contactInfo.email,
      phone: createBookingDto.contactInfo.phone,
      pnr: generateRandomString(6),
      status: 'Hold',
      adult: 2,
      child: 1,
      infant: 0,
      flightDate: new Date('2024-01-20'),
    };


    const createBookingEntityDocument = await this.createBookingEntityModel.create(bookingData);

    const flightData = {
      bookingRef: bookingRef,
      carrierCode: 'XYZ',
      flightNumber: 123,
      departureFrom: 'ABC',
      departureAirPort: 'Airport1',
      departureTime: new Date('2022-01-01T10:00:00'),
      arrivalTo: 'DEF',
      arrivalAirPort: 'Airport2',
      arrivalTime: new Date('2022-01-01T12:00:00'),
    };

  await this.createFlightEntityModel.create(flightData);
    
    const paxData = {
      bookingRef: bookingRef,
      givenName: 'John',
      surName: 'Doe',
      gender: 'Male',
      dob: new Date('1990-01-01'),
    };
  await this.createPaxModelEntityModel.create(paxData);

    return createBookingEntityDocument; 

    function generateRandomString(length: number): string {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let result = '';
    
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
    
      return result;
    }

  }

  async findAll() : Promise<createBookingEntity[]> {
    const createBookingEntityDocument = await this.createBookingEntityModel.find();
    return createBookingEntityDocument;
  }

  async findOneByPnr(pnr : string){
    const bookingEntityDocument = await this.createBookingEntityModel.findOne({pnr: pnr});
    const passengerEntityDocument = await this.createPaxModelEntityModel.find({bookingRef: bookingEntityDocument.bookingRef});
    const flightEntityDocument = await this.createFlightEntityModel.find({bookingRef: bookingEntityDocument.bookingRef});

    const bookingDetails = {
      bookingInfo: bookingEntityDocument,
      flightInfo: flightEntityDocument,
      passengerInfo: passengerEntityDocument
    }
    return bookingDetails;
  }

}
