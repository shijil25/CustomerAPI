import { User } from './user.model';
import { OrderItem } from './order-item.model';

export interface Order {
    Id: string;
    OrderId: number;
    User: User;
    Total: number;
    OrderDate: Date;
    OrderItems: OrderItem[]; 
}