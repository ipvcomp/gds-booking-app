import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createPaxModelEntity, createFlightEntity, createBookingEntity } from './entities/booking.entity';


@Injectable()
export class BookingService {
  constructor(
    @InjectModel(createPaxModelEntity.name)
     private createPaxModelEntityModel: Model<createPaxModelEntity>,
    @InjectModel(createFlightEntity.name)
     private createFlightEntityModel: Model<createFlightEntity>,
    @InjectModel(createBookingEntity.name)
     private createBookingEntityModel: Model<createBookingEntity>,
  ) {}
  async create(createBookingDto: CreateBookingDto) {
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



    // Save data using the models
    // const createPaxModelEntityDocument = this.createPaxModelEntityModel.create();
    // await createPaxModelEntityDocument.save()

    // const createFlightEntityDocument = new this.createFlightEntityModel(flightData);
    // await createFlightEntityDocument.save();

    const createBookingEntityDocument = await this.createBookingEntityModel.create(bookingData);
    //await createBookingEntityDocument.save();

    return createBookingEntityDocument;

  }

  async findAll() : Promise<createBookingEntity[]> {
    const createBookingEntityDocument = await this.createBookingEntityModel.find();
    return createBookingEntityDocument;
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
