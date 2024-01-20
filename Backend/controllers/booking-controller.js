const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const db = require('../dbHelper');



const saveBooking = async (req, res) => {
    try {
        const { placeName:name, date, totalPrice:cost , personCount:slotId } = req.body;

      
        const bookingData = {
            slotId,
            name,
            date,
            cost
        };

        await db.collection('bookings').insertOne(bookingData);

        res.status(201).json({ message: 'Booking successfully', data: bookingData });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


const getBooking = async (req, res) => {
    try {
        const bookings = await db.collection('bookings').find({}).toArray();

        res.status(201).json({ message: 'Bookings details', data: bookings });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = {saveBooking ,getBooking}