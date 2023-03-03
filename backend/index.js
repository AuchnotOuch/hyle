const express = require("express")
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const app = express()

app.get('/', (req, res) => {
    return res.json('Hello World!')
})

app.listen(5000, () => console.log("listening on port 5000!"))
