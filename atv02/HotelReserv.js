class HotelReservation {
    bookHotel(location, checkInDate, checkOutDate) {
        if (!location || !checkInDate || !checkOutDate) {
            throw new Error("Local, data de check-in e data de check-out são obrigatórios.");
        }

        const isAvailable = true

        if (!isAvailable) {
            throw new Error("Hotel não disponível nas datas selecionadas.");
        }

        return `Hotel reservado em ${location} de ${checkInDate} a ${checkOutDate}.`;
    }
}

module.exports = HotelReservation; 