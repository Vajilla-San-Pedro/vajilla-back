const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use('/', require('./router'));

app.listen(5000, () =>{
    console.log('Server is running on port 5000');
})