import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { OrderPageDTO } from './types/order_page.dto';
import { CreateOrderMessage, OrderQueryMessage, OrdersQueryMessage } from './types/request.msg';
import { MessagePattern } from '@nestjs/microservices';
import { OrderDTO } from './types/order.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'list_orders' })
  async getAllOrders(query: OrdersQueryMessage): Promise<OrderPageDTO> {
    console.log('message received - ORDER', '{ cmd: `list_orders` }');
    return await this.appService.listOrders(query);
  }

  @MessagePattern({ cmd: 'get_order' })
  async getOrderByID(query: OrderQueryMessage): Promise<OrderDTO> {
    console.log('message received - ORDER', '{ cmd: `get_order` }');
    return await this.appService.getOrderByID(query);
  }

  @MessagePattern({ cmd: 'create_order'})
  async createOrder(createOrderRequest: CreateOrderMessage): Promise<OrderDTO> {
    console.log('message received - ORDER', '{ cmd: `create_order` }');
    return await this.appService.createOrder(createOrderRequest);
  }
}
