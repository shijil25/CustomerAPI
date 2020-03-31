import { Order } from "../models/order.model";

/**
 * Iorder service
 */
export interface IOrderService {
    findAll : (customerId : number) => Promise<Order[]>;
    findById : (orderId : number) => Promise<Order>;
}