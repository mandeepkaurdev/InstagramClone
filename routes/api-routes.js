const db = require('../models');

module.exports = function (app) {

    app.get('/api/instagram', function(req, res){
        res.send("welcome!");
      });
      


    app.post('/add', function (req, res) {
        db.create(req.body)
            .then(function (db) {
                res.json(db);
            })
            .catch(function (err) {
                res.json(err);
            });
    });


    app.put(`/api/update/:id`, function (req, res) {
        db.findOneAndUpdate({ _id: req.params.id }, { $set: { completed: true } })
            .then(function (db) {
                res.json(db);
            })
            .catch(function (err) {
                res.json(err);
            });
    });


    app.get('/api/instagram', function (req, res) {
        db.find({})
            .then(function (db) {
                res.json(db);
            })
            .catch(function (err) {
                res.json(err);
            });
    });


    app.delete('/delete/:id', function (req, res) {
        db.deleteOne({ _id: req.params.id })
            .then(function (db) {
                res.json(db);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

};
