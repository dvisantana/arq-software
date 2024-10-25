const FlightReservation = require('./FlightReserv');
const HotelReservation = require('./HotelReserv');
const CarRental = require('./CarRental');

class TravelFacade {
    constructor() {
        this.flightReservation = new FlightReservation();
        this.hotelReservation = new HotelReservation();
        this.carRental = new CarRental();
    }

    bookTrip(destination, flightDate, hotelCheckIn, hotelCheckOut, carStart, carEnd) {
        const flight = this.flightReservation.bookFlight(destination, flightDate);
        const hotel = this.hotelReservation.bookHotel(destination, hotelCheckIn, hotelCheckOut);
        const car = this.carRental.rentCar(destination, carStart, carEnd);

        return {
            flight,
            hotel,
            car
        };
    }
}

module.exports = TravelFacade;
