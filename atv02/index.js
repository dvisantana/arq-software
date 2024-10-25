const readline = require('readline');
const TravelFacade = require('./TravelFacade');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const travelFacade = new TravelFacade();

function askQuestion(query) {
    return new Promise((resolve) => {
        rl.question(query, resolve);
    });
}

async function simulateBooking() {
    const destination = 'Cornelio Procopio';
    const flightDate = '2024-12-01';
    const hotelCheckIn = '2024-12-01';
    const hotelCheckOut = '2024-12-10';
    const carStart = '2024-12-01';
    const carEnd = '2024-12-10';

    const tripDetails = travelFacade.bookTrip(
        destination,
        flightDate,
        hotelCheckIn,
        hotelCheckOut,
        carStart,
        carEnd
    );

    console.log('Resultado da Reserva com Dados Prontos:', tripDetails);
}

async function main() {
    try {
        const choice = await askQuestion('Deseja simular com dados prontos ou inserir os dados? (0 - pronto/1 - inserir): ');

        if (choice.toLowerCase() === '0') {
            await simulateBooking();
        } else if (choice.toLowerCase() === '1') {
            const destination = await askQuestion('Digite o destino da viagem: ');
            const flightDate = await askQuestion('Digite a data do voo (YYYY-MM-DD): ');
            const hotelCheckIn = await askQuestion('Digite a data de check-in do hotel (YYYY-MM-DD): ');
            const hotelCheckOut = await askQuestion('Digite a data de check-out do hotel (YYYY-MM-DD): ');
            const carStart = await askQuestion('Digite a data de início do aluguel do carro (YYYY-MM-DD): ');
            const carEnd = await askQuestion('Digite a data de fim do aluguel do carro (YYYY-MM-DD): ');

            const tripDetails = travelFacade.bookTrip(
                destination,
                flightDate,
                hotelCheckIn,
                hotelCheckOut,
                carStart,
                carEnd
            );

            console.log('Resultado da Reserva com Dados Inseridos:', tripDetails);
        } else {
            console.log('Opção inválida. Por favor, digite "pronto" ou "inserir".');
        }
    } catch (error) {
        console.error('Erro ao processar a reserva:', error.message);
    } finally {
        rl.close();
    }
}

main();
