import { Injectable } from '@nestjs/common';
import { createFlightBookingDto, createFlightDto, createOfferDto } from './dto/create-flight.dto';
import axios from 'axios';
import { error } from 'console';
import { BookingService } from 'src/booking/booking.service';
const qs = require('qs');

@Injectable()
export class FlightService {

  constructor(
    private readonly bookingService: BookingService
  ){}

  async generateToken(){
    let data = qs.stringify({
      'client_id': 'HfcaE9fm7hALWGXsa1MfglwXTvhIZ27S',
      'client_secret': 'WvQvMNI6DWxIZRKp',
      'grant_type': 'client_credentials' 
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://test.api.amadeus.com/v1/security/oauth2/token',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };

    const response = await axios.request(config);
      if (response.status === 200) {
        const result = response.data;
        if ('access_token' in result) {
          const amadeus_token = result['access_token'];
          return amadeus_token;
        } else {
          throw new Error('Token Creation Failed');
        }
      } else {
        throw new Error('Token Creation Failed');
      }

  }

  async searchFlight(createFlightDto: createFlightDto) {

    let cabinclass: string = createFlightDto.cabin_class;
    let requestSegments = [];
    let i = 0;

    createFlightDto.segments.forEach(data => {
      i++;

      const request = {
        id: i,
        originLocationCode: data.departureFrom,
        destinationLocationCode: data.arrivalTo,
        departureDateTimeRange: {
          date: data.departureDate,
          dateWindow: "I3D",
        },
      };

      requestSegments.push(request);
    });

    let adultCount = createFlightDto.adultCount ? createFlightDto.adultCount : 1;
    let childCount = createFlightDto.childCount ? createFlightDto.childCount : 0;
    let infantCount = createFlightDto.infantCount ? createFlightDto.infantCount : 0;

    let travelers = [];
    let pax = 0;

    if (adultCount > 0) {
      for (let i = 1; i <= adultCount; i++) {
        pax++;
        let request = {
          id: pax,
          travelerType: "ADULT",
          fareOptions: ["STANDARD"],
        };

        travelers.push(request);
      }
    }

    if (childCount > 0) {
      for (let i = 1; i <= childCount; i++) {
        pax++;
        let request = {
          id: pax,
          travelerType: "CHILD",
          fareOptions: ["STANDARD"],
        };

        travelers.push(request);
      }
    }

    if (infantCount > 0) {
      for (let i = 1; i <= infantCount; i++) {
        pax++;
        let request = {
          id: pax,
          travelerType: "HELD_INFANT",
          associatedAdultId: i,
          fareOptions: ["STANDARD"],
        };

        travelers.push(request);
      }
    }


    const token =  await this.generateToken();

    let data = JSON.stringify({
      "currencyCode": "EUR",
      "originDestinations": requestSegments,
      "travelers": travelers,
      "sources": [
        "GDS"
      ],
      "searchCriteria": {
        "maxFlightOffers": 50,
        "flightFilters": {
          "cabinRestrictions": [
            {
              "cabin": cabinclass,
              "coverage": "MOST_SEGMENTS",
              "originDestinationIds": [
                "1"
              ]
            }
          ],
          "carrierRestrictions": {
            "excludedCarrierCodes": [ "XY"
            ]
          }
        }
      }
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://test.api.amadeus.com/v2/shopping/flight-offers',
      headers: { 
        'Content-Type': 'application/json', 
        'X-HTTP-Method-Override': 'GET', 
        'Authorization': `Bearer ${token}`
      },
      data : data
    };

    const response =  await axios.request(config);
    return response.data;
  }

  async offerFlight(offerPrice : createOfferDto){

    const token = await this.generateToken();
    let data = {
        "data": {
            "type": "flight-offers-pricing",
            "flightOffers": [
                offerPrice
            ]
        }
    };

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://test.api.amadeus.com/v1/shopping/flight-offers/pricing',
      headers: { 
        'Content-Type': 'application/json', 
        'X-HTTP-Method-Override': 'GET', 
        'Authorization': `Bearer ${token}`
      },
      data : data
    };

    const response = await axios.request(config)
    return response.data;


  }

  async bookingFlight(bookingDto : createFlightBookingDto){

    const flightInfo = bookingDto.flightInfo;
    const travellerInfo = bookingDto.passengerInfo;
    const contactInfo = bookingDto.contactInfo;

    const travellerList= [];
    let count = 0;
    if(travellerInfo.adult.length > 0){
      for(const adults of travellerInfo.adult){
        count++;
        const singleTraveller = {
          "id": count,
          "dateOfBirth": adults.dob,
          "name": {
            "firstName": adults.givenName.toUpperCase(),
            "lastName": adults.surName.toUpperCase()
          },
          "gender": adults.gender.toUpperCase(),
          "contact": {
            "emailAddress": contactInfo.email,
            "phones": [
              {
                "deviceType": "MOBILE",
                "countryCallingCode": "34",
                "number": "480080076"
              }
            ]
          },
          "documents": [
            {
              "documentType": "PASSPORT",
              "birthPlace": "Madrid",
              "issuanceLocation": "Madrid",
              "number": adults.documentNumber.toUpperCase(),
              "expiryDate": adults.documentExpireDate,
              "issuanceCountry": adults.nationality.toUpperCase(),
              "validityCountry": adults.nationality.toUpperCase(),
              "nationality": adults.nationality.toUpperCase(),
              "holder": true
            }
          ]
        };

        travellerList.push(singleTraveller);
      }
    }

    if(travellerInfo.child.length > 0){
      for(const childs of travellerInfo.child){
        count++;
        const singleTraveller = {
          "id": count,
          "dateOfBirth": childs.dob,
          "name": {
            "firstName": childs.givenName.toUpperCase(),
            "lastName": childs.surName.toUpperCase()
          },
          "gender": childs.gender.toUpperCase(),
          "contact": {
            "emailAddress": contactInfo.email.toUpperCase(),
            "phones": [
              {
                "deviceType": "MOBILE",
                "countryCallingCode": "34",
                "number": "480080076"
              }
            ]
          },
          "documents": [
            {
              "documentType": "PASSPORT",
              "birthPlace": "Madrid",
              "issuanceLocation": "Madrid",
              "number": childs.documentNumber.toUpperCase(),
              "expiryDate": childs.documentExpireDate,
              "issuanceCountry": childs.nationality.toUpperCase(),
              "validityCountry": childs.nationality.toUpperCase(),
              "nationality": childs.nationality.toUpperCase(),
              "holder": true
            }
          ]
        };

        travellerList.push(singleTraveller);
      }
    }

    if(travellerInfo.infant.length > 0){
      for(const infants of travellerInfo.infant){
        count++;
        const singleTraveller = {
          "id": count,
          "dateOfBirth": infants.dob,
          "name": {
            "firstName": infants.givenName.toUpperCase(),
            "lastName": infants.surName.toUpperCase()
          },
          "gender": infants.gender.toUpperCase(),
          "contact": {
            "emailAddress": contactInfo.email.toUpperCase(),
            "phones": [
              {
                "deviceType": "MOBILE",
                "countryCallingCode": "34",
                "number": "480080076"
              }
            ]
          },
          "documents": [
            {
              "documentType": "PASSPORT",
              "birthPlace": "Madrid",
              "issuanceLocation": "Madrid",
              "number": infants.documentNumber.toUpperCase(),
              "expiryDate": infants.documentExpireDate,
              "issuanceCountry": infants.nationality.toUpperCase(),
              "validityCountry": infants.nationality.toUpperCase(),
              "nationality": infants.nationality.toUpperCase(),
              "holder": true
            }
          ]
        };

        travellerList.push(singleTraveller);
      }
    }

    let data = JSON.stringify({
      "data": {
        "type": "flight-order",
        "flightOffers": [flightInfo],
        "travelers": travellerList,
        "remarks": {
          "general": [
            {
              "subType": "GENERAL_MISCELLANEOUS",
              "text": "ONLINE BOOKING FROM INCREIBLE VIAJES"
            }
          ]
        },
        "ticketingAgreement": {
          "option": "DELAY_TO_CANCEL",
          "delay": "6D"
        },
        "contacts": [
          {
            "addresseeName": {
              "firstName": "ABDUL",
              "lastName": "ISHIAQ"
            },
            "companyName": "I-PURVEY",
            "purpose": "STANDARD",
            "phones": [
              {
                "deviceType": "MOBILE",
                "countryCallingCode": "33",
                "number": "480080072"
              }
            ],
            "emailAddress": "support@increibleviajes.es",
            "address": {
              "lines": [
                "Calle Prado, 16"
              ],
              "postalCode": "28014",
              "cityName": "LONDON",
              "countryCode": "GB"
            }
          }
        ]
      }
    });

    const token = await this.generateToken();
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://test.api.amadeus.com/v1/booking/flight-orders',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}`
      },
      data : data
    };

    try{
      const reponses = await axios.request(config)
      const responseData =  reponses.data;

      //return responseData;

      if('id' in responseData['data']){
        return this.bookingService.saveData(bookingDto, responseData);
        
      }else{
        throw new Error('Booking Failed');
      }
    }catch(error){
      console.log(error);
    }

    
  }

  async  getBooking(bookingRef : string){

    const isBookingValid = await this.bookingService.checkBookingId(bookingRef);
    const bookingId =  isBookingValid?.buId;
    const token =  await this.generateToken();

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://test.api.amadeus.com/v1/booking/flight-orders/${bookingId}`,
      headers: { 'Authorization': `Bearer ${token}`}
    };

    try{
      const response = await axios.request(config);
      return response.data;
    }catch(error){
      console.log(error);
    }
    
  }

}
