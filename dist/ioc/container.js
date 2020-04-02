"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var types_1 = require("./types");
var order_repository_1 = require("./../repositories/order.repository");
var container = new inversify_1.Container();
container.bind(types_1.default.IOrderRepository).to(order_repository_1.OrderRepository).inSingletonScope();
exports.default = container;
//# sourceMappingURL=container.js.map