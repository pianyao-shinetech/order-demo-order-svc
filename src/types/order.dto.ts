import { CartItemDTO } from "./cart_item.dto";

export class OrderDTO {
    id: string;
    user_id: string;
    placed_date_time: Date;
    status: string;
    order_items: Array<CartItemDTO>;
    history: Array<string>;
}