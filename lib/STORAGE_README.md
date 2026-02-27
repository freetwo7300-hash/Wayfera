# Storage Utilities Documentation

This document explains how to use the storage utilities (localStorage, sessionStorage, cookies, and cache) in the Wayfera travel app.

## Table of Contents
- [LocalStorage](#localstorage)
- [SessionStorage](#sessionstorage)
- [Cookies](#cookies)
- [Cache with Expiration](#cache-with-expiration)
- [React Hooks](#react-hooks)

## LocalStorage

Persistent storage that survives browser restarts.

```typescript
import { localStorage } from '@/lib/storage';

// Save data
localStorage.set('user-preferences', { theme: 'dark', language: 'en' });

// Get data
const preferences = localStorage.get<{ theme: string; language: string }>('user-preferences');

// Remove data
localStorage.remove('user-preferences');

// Clear all
localStorage.clear();
```

## SessionStorage

Temporary storage that clears when the browser tab is closed.

```typescript
import { sessionStorage } from '@/lib/storage';

// Save data
sessionStorage.set('search-filters', { category: 'beach', price: 1000 });

// Get data
const filters = sessionStorage.get<{ category: string; price: number }>('search-filters');

// Remove data
sessionStorage.remove('search-filters');

// Clear all
sessionStorage.clear();
```

## Cookies

HTTP cookies with configurable options.

```typescript
import { cookies } from '@/lib/storage';

// Set cookie
cookies.set('user-token', 'abc123', {
  expires: 7, // days
  path: '/',
  secure: true,
  sameSite: 'lax'
});

// Get cookie
const token = cookies.get('user-token');

// Remove cookie
cookies.remove('user-token');

// Get all cookies
const allCookies = cookies.getAll();
```

### Cookie Options

- `expires`: Number of days or Date object
- `path`: Cookie path (default: '/')
- `domain`: Cookie domain
- `secure`: HTTPS only (default: true)
- `sameSite`: 'strict' | 'lax' | 'none' (default: 'lax')

## Cache with Expiration

LocalStorage with automatic expiration.

```typescript
import { cache } from '@/lib/storage';

// Set cache with 60 minutes TTL
cache.set('destinations', destinationsData, 60);

// Get cache (returns null if expired)
const destinations = cache.get<Destination[]>('destinations');

// Check if expired
const isExpired = cache.isExpired('destinations');

// Remove cache
cache.remove('destinations');

// Clear all cache
cache.clear();
```

## React Hooks

### useLocalStorage

```typescript
import { useLocalStorage } from '@/hooks';

function MyComponent() {
  const [favorites, setFavorites, removeFavorites] = useLocalStorage<number[]>(
    'favorite-destinations',
    []
  );

  const addFavorite = (id: number) => {
    setFavorites([...favorites, id]);
  };

  return (
    <div>
      <p>Favorites: {favorites.length}</p>
      <button onClick={() => addFavorite(1)}>Add Favorite</button>
      <button onClick={removeFavorites}>Clear Favorites</button>
    </div>
  );
}
```

### useSessionStorage

```typescript
import { useSessionStorage } from '@/hooks';

function SearchComponent() {
  const [searchQuery, setSearchQuery, clearSearch] = useSessionStorage<string>(
    'search-query',
    ''
  );

  return (
    <div>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={clearSearch}>Clear</button>
    </div>
  );
}
```

### useCache

```typescript
import { useCache } from '@/hooks';

function DestinationsComponent() {
  const [destinations, setDestinations, clearCache, isExpired] = useCache<Destination[]>(
    'destinations-cache',
    [],
    30 // 30 minutes TTL
  );

  useEffect(() => {
    if (isExpired || destinations.length === 0) {
      fetchDestinations().then(setDestinations);
    }
  }, [isExpired]);

  return (
    <div>
      {isExpired && <p>Cache expired, refreshing...</p>}
      {destinations.map(dest => <DestinationCard key={dest.id} {...dest} />)}
    </div>
  );
}
```

## Best Practices

1. **Use LocalStorage for**: User preferences, favorites, theme settings
2. **Use SessionStorage for**: Temporary filters, search queries, form data
3. **Use Cookies for**: Authentication tokens, consent preferences
4. **Use Cache for**: API responses, expensive computations

## Security Notes

- Never store sensitive data (passwords, credit cards) in localStorage/sessionStorage
- Use secure cookies for authentication tokens
- Always validate and sanitize data retrieved from storage
- Set appropriate expiration times for cached data

## Cross-Tab Synchronization

The `useLocalStorage` hook automatically synchronizes data across browser tabs using the Storage API and custom events.

```typescript
// Changes in one tab will automatically update in other tabs
const [theme, setTheme] = useLocalStorage('theme', 'light');
```
