import { Injectable } from '@nestjs/common';
import { findAll, findId } from 'src/db/db';

@Injectable()
export class ShopService {
  public async find(arr: string): Promise<void> {
    return await findAll(arr);
  }

  public async findById(id: string): Promise<void> {
    return await findId(id);
  }
}
