import { OrderDTO } from "./order.dto";

export class OrderPageDTO {
    page_num: number;
    page_size: number;
    page_data: Array<OrderDTO>;
    total: number;
}


