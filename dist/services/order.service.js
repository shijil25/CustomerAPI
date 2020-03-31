"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var inversify_1 = require("inversify");
/**
 * Order Service
 */
var OrderService = /** @class */ (function () {
    function OrderService() {
    }
    /**
     * Finds all
     * @param customerId
     * @returns Promise<Orders>
     */
    OrderService.prototype.findAll = function (customerId) {
        return axios_1.default.get('http://localhost:8080/api/orders/CustomerOrder/' + customerId)
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            return null;
        });
    };
    /**
     * Finds by id
     * @param orderId
     * @returns Promise<Order>
     */
    OrderService.prototype.findById = function (orderId) {
        return axios_1.default.get('http://localhost:8080/api/orders/' + orderId)
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            return null;
        });
    };
    OrderService = __decorate([
        inversify_1.injectable()
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map