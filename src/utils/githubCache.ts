interface CachedData<T> {
  data: T;
  timestamp: number;
}

export const CACHE_DURATION = 24 * 60 * 60 * 1000; // 1 día

export function getCachedData<T>(key: string): T | null {
  if (typeof window === "undefined") return null;

  const cached = localStorage.getItem(key);
  if (!cached) return null;

  const { data, timestamp }: CachedData<T> = JSON.parse(cached);
  const now = new Date().getTime();

  if (now - timestamp > CACHE_DURATION) {
    localStorage.removeItem(key);
    return null;
  }

  return data;
}

export function setCachedData<T>(key: string, data: T): void {
  if (typeof window === "undefined") return;

  const cacheData: CachedData<T> = {
    data,
    timestamp: new Date().getTime(),
  };

  localStorage.setItem(key, JSON.stringify(cacheData));
}
