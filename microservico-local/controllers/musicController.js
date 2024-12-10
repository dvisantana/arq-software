const musicModel = require('../models/musicModel');

module.exports = {
    homePage: (req, res) => {
        res.sendFile('index.html', { root: './views' });
    },

    searchMusic: (req, res) => {
        const query = req.params.trackOrArtist;
        const result = musicModel.searchMusic(query);

        if (result) {
            res.json({
                message: 'Música encontrada!',
                data: result,
            });
        } else {
            res.status(404).json({
                message: 'Música ou artista não encontrado na biblioteca.',
            });
        }
    },
};
