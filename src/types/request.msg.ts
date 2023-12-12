import { CartItemDTO } from "./cart_item.dto";

export class OrdersQueryMessage {
    user_id: string;
    page_num: number;
    page_size: number;
}

export class OrderQueryMessage {
    user_id: string;
    order_id: string;
}

export class CreateOrderMessage {
    user_id: string;
    corder_items: Array<CartItemDTO>;
}
