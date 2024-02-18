import { Injectable } from '@nestjs/common';
import { CreateBookingDto, CreateFlightDto, CreateOfferDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import axios from 'axios';
const qs = require('qs');

@Injectable()
export class FlightService {

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

  async searchFlight(createFlightDto: CreateFlightDto) {

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

  async offerFlight(offerPrice : CreateOfferDto){


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

  async bookingFlight(bookingDto : CreateBookingDto){

    let data = {
      "data": {
        "type": "flight-order",
        "flightOffers": [
            
        ],
        "travelers": [
          {
            "id": "1",
            "dateOfBirth": "1982-01-16",
            "name": {
              "firstName": "JORGE",
              "lastName": "GONZALES"
            },
            "gender": "MALE",
            "contact": {
              "emailAddress": "jorge.gonzales833@telefonica.es",
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
                "issuanceDate": "2015-04-14",
                "number": "00000000",
                "expiryDate": "2025-04-14",
                "issuanceCountry": "ES",
                "validityCountry": "ES",
                "nationality": "ES",
                "holder": true
              }
            ]
          },
          {
            "id": "2",
            "dateOfBirth": "2012-10-11",
            "gender": "FEMALE",
            "contact": {
              "emailAddress": "jorge.gonzales833@telefonica.es",
              "phones": [
                {
                  "deviceType": "MOBILE",
                  "countryCallingCode": "34",
                  "number": "480080076"
                }
              ]
            },
            "name": {
              "firstName": "ADRIANA",
              "lastName": "GONZALES"
            }
          }
        ],
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
              "firstName": "PABLO",
              "lastName": "RODRIGUEZ"
            },
            "companyName": "INCREIBLE VIAJES",
            "purpose": "STANDARD",
            "phones": [
              {
                "deviceType": "LANDLINE",
                "countryCallingCode": "34",
                "number": "480080071"
              },
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
              "cityName": "Madrid",
              "countryCode": "ES"
            }
          }
        ]
      }
    }; 

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://test.api.amadeus.com/v1/booking/flight-orders',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer WvQvMNI6DWxIZRKp'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    


  }

}
