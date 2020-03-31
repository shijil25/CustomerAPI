"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var typeorm_1 = require("typeorm");
var OrderRepository = /** @class */ (function () {
    function OrderRepository() {
    }
    OrderRepository.prototype.findAll = function (customerId) {
        return typeorm_1.getManager().query("select * from [order]");
    };
    OrderRepository.prototype.findById = function (orderId) {
        return typeorm_1.getManager().query("select top 1 * from [order] where orderId = '" + orderId + "'");
    };
    OrderRepository = __decorate([
        inversify_1.injectable()
    ], OrderRepository);
    return OrderRepository;
}());
exports.OrderRepository = OrderRepository;
//# sourceMappingURL=order.repository.js.map