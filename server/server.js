import express from 'express';
import body_parser from 'body-parser';
import bodyParser from 'body-parser';
import hotelRoutes from './lib/routes/hotelRoutes';
import logger from 'morgan';
import config from 'config';

import Mongoose from 'mongoose';

Mongoose.Promise = global.Promise;
Mongoose.connect(config.db_url,{useMongoClient: true});

const app = express(),
      port = process.env.PORT || config.app.port;

app.use(logger('dev'));
app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));



app.get("/", (req, res) => res.json({message: "Api Hotels Almundo"}));

hotelRoutes(app);

app.listen(port, () => {
    console.log("Server listening on port:" +port);
});
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "localhost");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });
export default app;
