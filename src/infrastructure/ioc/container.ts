import { Container } from 'inversify';
import TYPES from './types';
import { OrderRepository } from '../../data/repositories/order.repository';
import { IOrderRepository } from '../../data/interfaces/iorder.repository';

const container = new Container();

container.bind<IOrderRepository>(TYPES.IOrderRepository).to(OrderRepository).inSingletonScope();
export default container;