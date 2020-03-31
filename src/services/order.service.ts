import axios from 'axios';
import { IOrderService } from './iorder.service';
import { injectable } from 'inversify';

/**
 * Order Service
 */
@injectable()
export class OrderService implements IOrderService {
    /**
     * Finds all
     * @param customerId 
     * @returns Promise<Orders>    
     */
    findAll(customerId : number) {
      return axios.get('http://localhost:8080/api/orders/CustomerOrder/'+ customerId)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return null;
        });
    }

    /**
     * Finds by id
     * @param orderId 
     * @returns Promise<Order>  
     */
    findById(orderId : number) {
        return axios.get('http://localhost:8080/api/orders/'+ orderId)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return null;
        });
    }
}