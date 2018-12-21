require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');

const app = express();
app.use(json());

const PORT = process.env.SERVER_PORT || 5050;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));