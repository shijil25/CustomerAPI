import { controller, interfaces, httpGet, request, response } from 'inversify-express-utils';
import * as express from 'express';
import { inject } from 'inversify';
import TYPES from '../../infrastructure/ioc/types';
import { IOrderRepository } from '../../data/interfaces/iorder.repository';

/**
 * Customer Orders Controller
 */
@controller('/customerorders')
export class CustomerOrdersController implements interfaces.Controller {

    private orderRepository : IOrderRepository;

    /**
     * Creates an instance of customer orders controller.
     * @param orderRepository 
     */
    constructor(@inject(TYPES.IOrderRepository) orderRepository : IOrderRepository) {
        this.orderRepository = orderRepository;
    }

    /**
     * Https get
     * @param req 
     * @param res 
     */
    @httpGet('/:id')
    public async getOrders(@request() req : express.Request , @response() res : express.Response) {
        try {
            const orders = await this.orderRepository.findAll(+req.params.id);
            if(!orders){
                res.status(404).json("No orders found");
            } else {
                res.status(200).json(orders);
            }
        } catch(error) {
            res.status(400).json(error);
        }
    }

    /**
     * Https get
     * @param req 
     * @param res 
     */
    @httpGet('/orders/:id')
    public async getOrder(@request() req : express.Request , @response() res : express.Response) {
        try {
            const order = await this.orderRepository.findById(+req.params.id);
            if(!order){
                res.status(404).json("No order found");
            } else {
                res.status(200).json(order);
            }
        } catch(error) {
            res.status(400).json(error);
        }
    }
}