import express from "express";
import config from "./config";
import productsRoutes from "./routes/products.routes";
import cors from "cors";
// const bodyParser = require('body-parser');
const app = express();

//Settings
// app.set('port', config.port);

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(productsRoutes);

export default app;
