import { Product } from './product.model';

export interface OrderItem {
    OrderItemId: number;
    Product: Product;
    Quantity: number; 
    Total: number; 
}
