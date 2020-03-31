"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var order_service_1 = require("./../services/order.service");
var types_1 = require("./types");
var container = new inversify_1.Container();
container.bind(types_1.default.IOrderService).to(order_service_1.OrderService).inSingletonScope();
exports.default = container;
//# sourceMappingURL=container.js.map