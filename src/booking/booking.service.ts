import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
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

    const flightList = createBookingDto.flightInfo;
    console.log(flightList);
    const passengerInfo = createBookingDto.passengerInfo;

    const adultList =  passengerInfo.adult;
    const childList =  passengerInfo.child;
    const infantList =  passengerInfo.infant;

    const lastBookingRef = await this.createBookingEntityModel
      .findOne({}, { bookingRef: true, _id: false})
      .sort({ createdAt: -1 })
      .limit(1);
    
      let bookingRef: string =  '';
      if(lastBookingRef){
        bookingRef = `B${parseInt(lastBookingRef?.bookingRef.replace('B', ''), 10) + 1}`;
      }else{
        bookingRef = 'B1000';
      }

    const bookingData = {
      bookingRef: bookingRef,
      email: createBookingDto.contactInfo.email,
      phone: createBookingDto.contactInfo.phone,
      pnr: generateRandomString(6),
      status: 'Hold',
      adult: adultList?.length || 1,
      child: childList?.length || 0,
      infant: infantList?.length || 0,
      flightDate: (flightList[0].departureTime).slice(0, 10),
    };

    const createBookingEntityDocument = await this.createBookingEntityModel.create(bookingData);

    let i: number = 0;
    for (const flight of flightList) {
      i++;
      const flightData = {
        bookingRef: bookingRef,
        legId: i,
        carrierCode: flight.carrierCode,
        flightNumber: flight.flightNumber,
        departureFrom: flight.departureFrom,
        departureAirPort: flight.departureAirPort,
        departureTime: flight.departureTime,
        arrivalTo: flight.arrivalTo,
        arrivalAirPort: flight.arrivalAirPort,
        arrivalTime: flight.arrivalTime,
      };
      await this.createFlightEntityModel.create(flightData);
    }

  if(adultList.length > 0){
    for (const adultPax of adultList) {
      const paxData ={
        bookingRef: bookingRef,
        givenName: adultPax.givenName,
        surName: adultPax.surName,
        gender: adultPax.gender,
        dob: adultPax.dob,
        type : 'ADT'
      };
      await this.createPaxModelEntityModel.create(paxData);
    }
  }

  if(childList.length > 0){
    for (const childPax of childList) {
      const paxData ={
        bookingRef: bookingRef,
        givenName: childPax.givenName,
        surName: childPax.surName,
        gender: childPax.gender,
        dob: childPax.dob,
        type : 'CNN'
      };
      await this.createPaxModelEntityModel.create(paxData);
    }

  }

  if(infantList.length > 0){
    for (const infantPax of infantList) {
      const paxData ={
        bookingRef: bookingRef,
        givenName: infantPax.givenName,
        surName: infantPax.surName,
        gender: infantPax.gender,
        dob: infantPax.dob,
        type : 'INF'
      };
      await this.createPaxModelEntityModel.create(paxData);
    }
  }

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
