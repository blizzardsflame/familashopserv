const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require ('cors');
require('dotenv/config');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');

//TODO in jwt allow brands and subcategories
//cors
app.use(cors());
app.options('*', cors());

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use('/public/uploads', express.static(__dirname+'/public/uploads'));
app.use(errorHandler);


//env
const api = process.env.API_URL;

/* Routers */
const categoriesRoutes = require('./routers/categories');
const productsRoutes = require('./routers/products');
const usersRoutes = require('./routers/users');
const ordersRoutes = require('./routers/orders');

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);
/* End Routers */

//Database
mongoose.connect(process.env.CONNECTION_STRING)
        .then(() => {
            console.log('Connected to database');
        }).catch(err => {
            console.log(err);
        });


//Server
app.listen(3000, ()=>{

    console.log('server is running http://localhost:3000');
})