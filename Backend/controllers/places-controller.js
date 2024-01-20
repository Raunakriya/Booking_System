const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const { GridFSBucket, ObjectId } = require('mongodb');
const fs = require('fs')
const path = require('path');
const db = require('../dbHelper');


const addPlaces = async (req, res) => {
    try {
        const { name, review, cost } = req.body;

        const imagePath = path.join(__dirname + '/media/' + req.body.imageName);
        // Read the image file
        const imageBuffer = fs.readFileSync(imagePath);

        const bucket = new GridFSBucket(db);

        // Create a write stream to store the image in GridFS
        const uploadStream = bucket.openUploadStream(name);
        uploadStream.end(imageBuffer);

        const image = uploadStream.id;

        
        const imageData = {
            image,
            name,
            review,
            cost,

        };

        await db.collection('places').insertOne(imageData);

        res.status(201).json({ message: 'Image uploaded successfully', data: imageData });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


const getPlace = async (req, res) => {
    try {
        const places = await db.collection('places').find({}).toArray();

        // Attach image IDs to each place
        for (const place of places) {
            const imageId = place.image;
            if (imageId) {
                place.imageUrl = `http://localhost:3001/image/${imageId}`; // endpoint to get image
            }
        }

        res.json(places);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getPlaceByID = async (req, res) => {
    try {

        const places = await db.collection('places').findOne({ _id: new ObjectId(req.params.Id) }); 

        if (places) {
            const imageId = places.image; 
            if (imageId) {
                places.imageUrl = `http://localhost:3001/image/${imageId}`;
            }

            res.status(200).json(places);
        } else {
            res.status(404).json({ error: 'Place not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

// API endpoint to get image by ID
const imageByID = (req, res) => {
    try {
        const imageId = req.params.ID;
        const bucket = new GridFSBucket(db);

        const imageStream = bucket.openDownloadStream(new ObjectId(imageId));

        res.contentType('image/jpeg');


        imageStream.pipe(res);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { addPlaces, getPlace, imageByID, getPlaceByID }