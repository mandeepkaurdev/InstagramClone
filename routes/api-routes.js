const db = require('../models/index');

module.exports = function (app) {



    app.post('/api/photos', function (req, res) {
        db.photos.create(req.body)
            .then(function (photos) {
                res.json(photos);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.post('/api/likes', function (req, res) {
        db.likes.create(req.body)
            .then(function (likes) {
                res.json(likes);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.post('/api/comments', function (req, res) {
        db.comments.create(req.body)
            .then(function (comments) {
                res.json(comments);
            })
            .catch(function (err) {
                res.json(err);
            });
    });



    app.get('/api/photos', function (req, res) {
        db.photos.find({})
            .then(function (photos) {
                res.json(photos);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.get('/api/likes', function (req, res) {
        db.likes.find({})
            .then(function (likes) {
                res.json(likes);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.get('/api/comments', function (req, res) {
        db.comments.find({})
            .then(function (comments) {
                res.json(comments);
            })
            .catch(function (err) {
                res.json(err);
            });
    });



    app.delete('/api/photos', function (req, res) {
        db.photos.findOneAndDelete(req.body)
            .then(function (photos) {
                res.json(photos);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.delete('/api/likes', function (req, res) {
        db.likes.findOneAndDelete(req.body)
            .then(function (likes) {
                res.json(likes);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.delete('/api/comments', function (req, res) {
        db.comments.findOneAndDelete(req.body)
            .then(function (comments) {
                res.json(comments);
            })
            .catch(function (err) {
                res.json(err);
            });
    });



    app.put('/api/photos', function (req, res) {
        db.photos.findOneAndUpdate({ _id: req.body._id }, { set: { photos: req.body.photos } })
            .then(function (photos) {
                res.json(photos);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.put('/api/likes', function (req, res) {
        db.likes.findOneAndUpdate({ _id: req.body._id }, { set: { likes: req.body.likes } })
            .then(function (likes) {
                res.json(likes);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.put('/api/comments', function (req, res) {
        db.comments.findOneAndUpdate({ _id: req.body._id }, { set: { comments: req.body.comments } })
            .then(function (comments) {
                res.json(comments);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

};