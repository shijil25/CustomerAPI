import { Order } from '../../core/models/index';

export interface IOrderRepository {
    findAll: (customerId : number) => Promise<Order[]>;
    findById: (orderId : number) => Order;
}