
const express = require('express');
const router = express.Router()
const placeController = require('./controllers/places-controller')
const bookingController = require('./controllers/booking-controller')
const fs = require('fs')
const multer = require('multer')
const path = require('path')


router.post('/addPlaces', placeController.addPlaces)

// handle storage using multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    

        let path = `./controllers/media`;
        fs.mkdirSync(path, { recursive: true });
        cb(null, path);

    },
    filename: function (req, file, cb) {
        cb(null, `${file.originalname}`);
    }
});

var upload = multer({ storage: storage });

// handle single file upload
router.post('/uploadfile/', upload.single('file'), async (req, res) => {
    try {
        const file = req.file;

        if (!file) {
            res.send({ message: 'File no uplaoded...' })
        }
        const url = path.join(__dirname, `/controllers/media/${file.filename}`)//`${req.protocol}://${req.get('host')}/uploads/${file.filename}`

        console.log(url)

        res.send({ filename: url })

    } catch (err) {
        console.log(err)
        res.send({ err: err })
    }
});

// _______Places api_____________//

router.get('/getPlace', placeController.getPlace)
router.get('/image/:ID', placeController.imageByID)
router.get('/getPlace/:Id', placeController.getPlaceByID)

// ________Booking Routers____________//

router.post('/saveBooking', bookingController.saveBooking)
router.get('/getBookings', bookingController.getBooking)

module.exports = router