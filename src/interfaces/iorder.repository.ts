import { Order } from '../models/order.model';

export interface IOrderRepository {
    findAll: (customerId : number) => Promise<Order[]>;
    findById: (orderId : number) => Order;
}