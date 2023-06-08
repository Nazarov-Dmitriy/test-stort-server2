import { Controller, Get, Param } from '@nestjs/common';
import { ShopService } from './shop.service';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get('/discount')
  async discount() {
    try {
      return this.shopService.find('discount');
    } catch (e) {
      return e;
    }
  }

  @Get('/collection')
  async collection() {
    try {
      return this.shopService.find('collection');
    } catch (e) {
      return e;
    }
  }

  @Get('/product/:id')
  async findById(@Param() params: { id: string }) {
    try {
      return await this.shopService.findById(params.id);
    } catch (e) {
      return e;
    }
  }
}
