/**
 * @fileoverview APIs to get, post, and delete photos along with associated comments & likes. 
 * @author Gina Yi
 */
const db = require('../models/index');
/**
 * Uses Multer, a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
 * Uses fs, a node.js file system module to work with the file system on Server.
 */
const multer = require('multer');
const fs = require('fs');

/**
 * Multer Configuration
 * File destination: public/myPicFolder
 * File name: current dateTime + file name
 */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/myPicFolder');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});
const upload = multer({ storage: storage });

module.exports = function (app) {

    /**
     * API to get all photos
     * @returns {json} photos - Returns all photos with associated comments and likes if successful and returns err on error.
     * 
     */
    app.get('/api/photos', function (req, res) {
        db.photos.find({})
            .sort({ photo_url: -1 })
            .populate("likes", "likes")
            .populate('comments')
            .then(function (photos) {
                res.json(photos);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    /**
     * API to post a photo
     * @param {obj} req contains file object to post
     * @return {obj} response.redirect to default page
     */
    app.post('/api/photo', upload.single('inputUploadPhoto'), function (req, res, next) {
        db.photos.create({"photo_url": (req.file.path).replace('public', '')})
            .then(function (photos) {
                res.redirect(req.protocol + '://' + req.get('host'));
            })
            .catch(function (err) {
                res.json(err);
            });          
    });

    /**
     * API to delete a photo
     * @param {obj} req.params.index contains photoID to delete
     * @return {obj} Returns deleted photo object
     */
    app.delete('/api/photo/:index', function (req, res) {
        db.photos.findByIdAndDelete({ _id: req.params.index })
            .then(function (photo) {
                let imgPathToDelete = "./public/myPicFolder/" + photo.photo_url.replace("\\myPicFolder\\","");
                fs.unlink(imgPathToDelete, (err) => {
                    if (err) {
                        console.log("failed to delete local image:" + err);
                    } else {
                        console.log('successfully deleted local image');
                    }
                });
                res.json(photo);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    /**
     * API to post like
     * @param {obj} req.body.isLiked contains like to post
     * @return {obj} Returns a photo object associated with the like
     */
    app.post('/api/likes', function (req, res) {
        db.likes.create({ likes: req.body.isLiked })
            .then(function (dblike) {
                return db.photos.findOneAndUpdate({ _id: req.body._id }, { $push: { likes: dblike._id } }, { new: true });
            })
            .then(function (dbPhoto) {
                res.json(dbPhoto);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    /**
     * API to post a comment
     * @param {obj} req.body.userComment contains a userComment to post
     * @return {obj} Returns a photo object assoicated with the comment
     */
    app.post('/api/comments', function (req, res) {
        db.eachComment.create({ userComment: req.body.userComment })
            .then(function (comments) {
                return db.photos.findOneAndUpdate({ _id: req.body.photo_id }, { $push: { comments: comments._id } }, { new: true })
            })
            .then(function (photos) {
                res.json(photos)
            })
            .catch(function (err) {
                res.json(err);
            });
    });   

};