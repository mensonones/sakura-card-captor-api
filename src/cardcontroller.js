const Card = require("./models/Card");

/// Create and Save a new Card
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name || !req.body.urlImage) {
        return res.status(400).send({
            message: "not all data has been entered"
        });
    }

    // Create a Card
    const card = new Card({
        name: req.body.name, 
        urlImage: req.body.urlImage,
    });

    // Save Card in the database
    card.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Card."
        });
    });
};

// Retrieve and return all cards from the database.
exports.findAll = (req, res) => {
    Card.find()
    .then(cards => {
        res.send(cards);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving cards."
        });
    });
};

// Find a single card with a cardId
exports.findOne = (req, res) => {
    Card.findById(req.params.cardId)
    .then(card => {
        if(!card) {
            return res.status(404).send({
                message: "Card not found with id " + req.params.cardId
            });            
        }
        res.send(card);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Card not found with id " + req.params.cardId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving card with id " + req.params.cardId
        });
    });
};

// Update a card identified by the cardId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Card name can not be empty"
        });
    }

    // Find card and update it with the request body
    Card.findByIdAndUpdate(req.params.cardId, {
        name: req.body.name,
        urlImage: req.body.urlImage
    }, {new: true})
    .then(card => {
        if(!card) {
            return res.status(404).send({
                message: "Card not found with id " + req.params.cardId
            });
        }
        res.send(card);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Card not found with id " + req.params.cardId
            });                
        }
        return res.status(500).send({
            message: "Error updating card with id " + req.params.cardId
        });
    });
};

// Delete a card with the specified cardId in the request
exports.delete = (req, res) => {};
