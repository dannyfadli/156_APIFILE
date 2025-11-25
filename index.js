const express = require('express');
const connetDatabase = require('./config/db');
// const apiRoute = require('./routes/apiRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/api', apiRoute);

async function startServer() {
    await connetDatabase();
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}   

startServer();