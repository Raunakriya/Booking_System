const mongoose = require('mongoose');

//const mongoDBURL = 'mongodb://127.0.0.1:27017/booking-system';
const mongoDBURL='mongodb+srv://raunakriya:raunakcluster@cluster0.klgs2a1.mongodb.net/booking-system?retryWrites=true&w=majority'
mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


module.exports=db