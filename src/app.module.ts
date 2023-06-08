import { Module } from '@nestjs/common';
import { ShopModule } from './module/shop/shop.module';
import { ShopController } from './module/shop/shop.controller';
import { ShopService } from './module/shop/shop.service';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ShopModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/public',
    }),
  ],
  controllers: [ShopController],
  providers: [ShopService],
})
export class AppModule {}
