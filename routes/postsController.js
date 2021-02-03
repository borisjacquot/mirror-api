const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { PostsModel } = require('../models/postsModel');

router.get('/', (req, res) => {
    PostsModel.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error to get data: ' + err);
    })
});

router.get('/:id', (req, res) => {
    PostsModel.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error to get data: ' + err);
    })
});

router.post('/', (req, res) => {
    const newRecord = new PostsModel({
        name: req.body.name,
        news: req.body.news,
        calendar: req.body.calendar
    });

    newRecord.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error creating data: ' + err);
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('Unknown ID: ' + req.params.id);

    const updateRecord = {
        name: req.body.name,
        news: req.body.news,
        calendar: req.body.calendar
    };

    PostsModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateRecord },
        { new: true },
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log('Update error: ' + err);
        }
    )
});

router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('Unknown ID: ' + req.params.id);

    PostsModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("Delete error: " + err);
        }
    );
});

module.exports = router;