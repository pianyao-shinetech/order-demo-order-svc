import { Injectable } from '@nestjs/common';
import { CreateOrderMessage, OrderQueryMessage, OrdersQueryMessage } from './types/request.msg';
import { OrderPageDTO } from './types/order_page.dto';
import { OrderDTO } from './types/order.dto';

@Injectable()
export class AppService {
  async createOrder(createOrderRequest: CreateOrderMessage): Promise<OrderDTO> {
    throw new Error('Method not implemented.');
  }
  async getOrderByID(query: OrderQueryMessage): Promise<OrderDTO> {
    throw new Error('Method not implemented.');
  }
  async listOrders(query: OrdersQueryMessage): Promise<OrderPageDTO> {
    throw new Error('Method not implemented.');
  }


}
