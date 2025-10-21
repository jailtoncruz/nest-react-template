import { ICacheService } from '@interfaces/cache/ICacheService';
import { Injectable } from '@nestjs/common';

interface CacheEntry<T> {
  value: T;
  expiresAt?: number;
}

@Injectable()
export class InMemoryCacheService implements ICacheService {
  private cache = new Map<string, CacheEntry<any>>();

  get<T = any>(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) return null;
    if (entry.expiresAt && entry.expiresAt < Date.now()) {
      this.cache.delete(key);
      return null;
    }
    return entry.value;
  }

  set<T = any>(key: string, value: T, ttlSeconds?: number): void {
    const expiresAt = ttlSeconds ? Date.now() + ttlSeconds * 1000 : undefined;
    this.cache.set(key, { value, expiresAt });
  }

  delete(key: string): void {
    this.cache.delete(key);
  }
}
