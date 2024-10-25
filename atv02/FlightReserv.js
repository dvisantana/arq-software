class FlightReservation {
    bookFlight(destination, date) {
        if (!destination || !date) {
            throw new Error("Destino e data são obrigatórios para a reserva de voo.");
        }

        const isAvailable = true

        if (!isAvailable) {
            throw new Error("Voo não disponível para a data selecionada.");
        }

        return `Voo reservado para ${destination} em ${date}.`;
    }
}

module.exports = FlightReservation;