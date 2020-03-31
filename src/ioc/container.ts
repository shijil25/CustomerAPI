import { Container } from 'inversify';
import { OrderService } from './../services/order.service';
import { IOrderService } from './../services/iorder.service';
import TYPES from './types';

const container = new Container();

container.bind<IOrderService>(TYPES.IOrderService).to(OrderService).inSingletonScope();
export default container;