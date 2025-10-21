import { Provider } from '@nestjs/common';
import { InMemoryCacheService } from './InMemoryCache.service';
import { CacheService } from '@interfaces/cache/ICacheService';

export const CacheServiceProvider: Provider = {
  provide: CacheService,
  useClass: InMemoryCacheService,
};
