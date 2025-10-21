export interface ICacheService {
  get<T = any>(key: string): Promise<T | null>;
  set<T = any>(key: string, value: T, ttlSeconds?: number): void;
  delete(key: string): void;
}

export abstract class CacheService implements ICacheService {
  get<T = any>(key: string): Promise<T | null> {
    throw new Error('Method not implemented.');
  }
  set<T = any>(key: string, value: T, ttlSeconds?: number): void {
    throw new Error('Method not implemented.');
  }
  delete(key: string): void {
    throw new Error('Method not implemented.');
  }
}
