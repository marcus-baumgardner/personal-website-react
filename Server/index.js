const connectDB = require('./startup/db');
const express = require('express');
const app = express();
const cors = require('cors');
const contact = require('./routes/contact/contact'); 


connectDB();
app.use(cors());
app.use(express.json());
app.use('/api', contact);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});