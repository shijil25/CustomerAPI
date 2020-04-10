import "reflect-metadata";
require("dotenv").config();
import * as express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from "body-parser";
import container from '../infrastructure/ioc/container';
import './controllers/customer-orders.controller';
const mongodbService = require('../modules/mogodb.service');
const swaggerUi = require('swagger-ui-express');
import * as swaggerDocument from './swagger.json';

const app = express();

/**
 * Register vody parser middlewares
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.set("port", 8090);

/**
 * Wrapper for express server
 */
let server = new InversifyExpressServer(container, null, { rootPath : '/api' }, app);

/**
 * Applies all routes & configurations to the server
 * @returns express applications
 */
let appConfigured = server.build();
/**
 * Listen for connections
 */
appConfigured.listen(app.get("port"), () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
    mongodbService();
});

module.exports = app;

