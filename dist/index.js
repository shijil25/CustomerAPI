"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express = require("express");
var inversify_express_utils_1 = require("inversify-express-utils");
var bodyParser = require("body-parser");
var container_1 = require("./ioc/container");
require("./controllers/customer-orders.controller");
var app = express();
/**
 * Register vody parser middlewares
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("port", 8090);
/**
 * Wrapper for express server
 */
var server = new inversify_express_utils_1.InversifyExpressServer(container_1.default, null, { rootPath: '/api' }, app);
/**
 * Applies all routes & configurations to the server
 * @returns express applications
 */
var appConfigured = server.build();
/**
 * Listen for connections
 */
var serve = appConfigured.listen(app.get("port"), function () {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});
module.exports = app;
//# sourceMappingURL=index.js.map