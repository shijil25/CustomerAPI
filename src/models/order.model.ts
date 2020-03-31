import { User } from './user.model';
import { OrderItem } from './order-item.model';

export interface Order {
    OrderId: number;
    User: User;
    Total: number;
    OrderDate: Date;
    OrderItems: OrderItem[]; 
}