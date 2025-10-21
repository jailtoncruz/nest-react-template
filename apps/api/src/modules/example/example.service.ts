import { CacheService } from '@interfaces/cache/ICacheService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  private examples: { id: number; name: string }[] = [];

  constructor(private readonly cache: CacheService) {}

  list() {
    return this.examples.reverse();
  }

  create(dto: { name: string }) {
    this.cache.set(dto.name, dto);
    this.examples.push({ ...dto, id: this.examples.length + 1 });
    return dto;
  }
}
