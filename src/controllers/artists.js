const { Artist } = require('../models');
const { patch } = require('../app');

exports.create = (req, res) => {
    Artist.create(req.body).then(artist => res.status(201).json(artist));
};

exports.list = (req, res) => {
    Artist.findAll().then(artist => res.status(200).json(artist));
};

exports.byArtistId = (req, res) => {
    const { artistId } = req.params;
    Artist.findByPk(artistId).then(artist => {
        if (!artist) {
        res.status(404).json({error: 'the artist could not be found.'});
        } else {
            res.status(200).json(artist);
        }
    });   
};

exports.updateById = (req, res) => {
    const { id } = req.params;
    console.log("update by id:", id);
    Artist.update(req.body, { where: { id }}).then(([updatedArtist]) => {
        if (!updatedArtist) {
        res.status(404).json({ error: 'The artist could not be found.'});
        } else {
        res.status(200).json(updatedArtist);
        }
    });
};

exports.deleteById = (req, res) => {
    const { artistId } = req.params;
    Artist.destroy({ where: { artistId }}).then(([updatedArtist]) => {
        if (!updatedArtist) {
            res.status(404).json({ error: 'The artist could not be found.'});    
        } else {
            res.status(204).json(updatedArtist);
        }
    });
};