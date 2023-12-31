const express = require ('express');
const cors = require ('cors');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

//cors
app.use(cors());
app.options('*', cors());
//env
require('dotenv/config');
const api = process.env.API_URL;

//mongoose
const mongoose = require('mongoose');

/* Routers */
const productsRouter =  require('./routers/products');
/* End Routers */

/* Models */
const Product = require('./models/product');
/* End Models */

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

//Routes

app.use(`${api}/products`, productsRouter);





mongoose.connect(process.env.CONNECTION_STRING)
        .then(() => {
            console.log('Connected to database');
        }).catch(err => {
            console.log(err);
        });

app.listen(3000, () => {
    console.log('Server is running');
}
);