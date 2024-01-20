const router = require('./router.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors')

const app = express();
app.use(cors({ origin: '*' }));
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// Routes
app.use('/', router);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
