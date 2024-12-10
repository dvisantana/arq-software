const musicLibrary = [
    { track: 'Céu Azul', artist: 'Charlie Brown Jr', album: 'Camisa 10 (Joga Bola Até na Chuva)', genre: 'Rock Nacional' },
    { track: 'Primavera', artist: 'Tim Maia', album: 'Tim Maia 1970', genre: 'Soul' },
    { track: 'Wonderwall', artist: 'Oasis', album: '(What\'s the Story) Morning Glory?', genre: 'Britpop' },
    { track: 'Let It Be', artist: 'The Beatles', album: 'Let It Be', genre: 'Rock Clássico' },
];


module.exports = {
    searchMusic: (query) => {
        return musicLibrary.find(
            (item) =>
                item.track.toLowerCase() === query.toLowerCase() ||
                item.artist.toLowerCase() === query.toLowerCase()
        );
    },
};
