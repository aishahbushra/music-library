const { Artist } = require('../models');

exports.create = (req, res) => {
    Artist.create(req.body).then(artist => res.sendStatus(201).json(artist));
};