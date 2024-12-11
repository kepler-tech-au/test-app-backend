const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const DBURI=`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBURL}/`

app.use(cors());
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.json({ message: 'Backend is working!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
