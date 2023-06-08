import { ShopService } from './shop.service';
export declare class ShopController {
    private readonly shopService;
    constructor(shopService: ShopService);
    discount(): Promise<any>;
    collection(): Promise<any>;
    findById(params: {
        id: string;
    }): Promise<any>;
}
