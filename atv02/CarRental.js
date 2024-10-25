class CarRental {
    rentCar(location, startDate, endDate) {
        if (!location || !startDate || !endDate) {
            throw new Error("Local, data de início e data de fim são obrigatórios para o aluguel.");
        }

        const isAvailable = true

        if (!isAvailable) {
            throw new Error("Carro não disponível para as datas selecionadas.");
        }

        return `Carro alugado em ${location} de ${startDate} a ${endDate}.`;
    }
}

module.exports = CarRental;