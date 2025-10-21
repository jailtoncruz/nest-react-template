import { Module } from '@nestjs/common';
import { CacheServiceProvider } from '../../infraestructure/cache/cache.provider';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';

@Module({
  controllers: [ExampleController],
  providers: [CacheServiceProvider, ExampleService],
})
export class ExampleModule {}
