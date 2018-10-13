const db = require('../models/index');

// gina code starts
const multer = require('multer');
const fs = require('fs');
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
            .then(function (photo) {
                let imgPathToDelete = "./public/myPicFolder/" + photo.photo_url.replace("\\myPicFolder\\","");
                console.log(imgPathToDelete);
                fs.unlink(imgPathToDelete, (err) => {
                    console.log("here fs.unlink");
                    if (err) {
                        console.log("failed to delete local image:"+err);
                    } else {
                        console.log('successfully deleted local image');                                
                    }
                });
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

        //we need req.body to have userComment and also photoUrl
        /*{
             userComment: "I like this photo",
             photo_url: '15675645647647.jpg'
        }*/

        db.eachComment.create({userComment: req.body.userComment})
        // db.eachComment.create({comments: req.body.eachComment})
        .then(function (comments) {
                res.json(comments);
            return db.photos.findOneAndUpdate({photo_url: req.body.photo_url}, { $push: { comments: comments._id } }, { new: true })

            })
            .then(function (photos){
                res.json(photos)
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