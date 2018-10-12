const db = require('../models/index');

// gina code starts
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/myPicFolder');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);   
    }
});
const upload = multer({storage: storage});


module.exports = function (app) {

    app.get('/api/photos', function (req, res) {
        db.photos.find({})
            .then(function (photos) {
                res.json(photos);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.post('/api/photo', upload.single('inputUploadPhoto'), function (req, res, next) {
        db.photos.create({"photo_url": (req.file.path).replace('public', '')})
            .then(function (photos) {
                //console.log((req.file.path).replace('public', ''));
                res.json(photos);
            })
            .catch(function (err) {
                res.json(err);
            });

        res.redirect(req.protocol + '://' + req.get('host'));
    });

    app.delete('/api/photo/:index', function (req, res) {
        console.log(req.params.index);
        db.photos.findByIdAndDelete({_id: req.params.index})
            .then(function (photos) {
                console.log(photos);
                res.json(photos);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

// gina code ends











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
        // console.log('api-route line 40: ')
        // console.log(req.body)
        db.eachComment.create(req.body)
            .then(function (comments) {
                res.json(comments);
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
        db.eachComment.find({})
            .then(function (comments) {
                res.json(comments);
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