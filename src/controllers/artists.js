const { Artist } = require('../models');

exports.create = (req, res) => {
    Artist.create(req.body).then(artist => res.status(201).json(artist));
};

exports.list = (req, res) => {
    Artist.findAll().then(artist => res.status(200).json(artist));
};

exports.byArtistId = (req, res) => {
    const { artistId } = req.params;
    Artist.findByPk(artistId).then(artist => res.status(200).json(artist));
    
}