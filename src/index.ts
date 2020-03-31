import "reflect-metadata";
import * as express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from "body-parser";
import container from './ioc/container';
import './controllers/customer-orders.controller';

const app = express();

/**
 * Register vody parser middlewares
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
let serve = appConfigured.listen(app.get("port"), () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});

module.exports = app;