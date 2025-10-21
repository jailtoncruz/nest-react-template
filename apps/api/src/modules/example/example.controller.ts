import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExampleService } from './example.service';

@Controller('example')
export class ExampleController {
  constructor(private readonly service: ExampleService) {}

  @Get()
  list() {
    return this.service.list();
  }

  @Post()
  create(@Body() dto: { name: string }) {
    return this.service.create(dto);
  }
}
