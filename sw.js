const CACHE_NAME = 'soja-pulverizacao-v3';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './ficha_de_campo_impressao.html',
  './talhoes_dados.json',
  './manifest.json',
  './tailwind.min.js',
  './xlsx.full.min.js',
  './icon-192.png',
  './icon-512.png'
];

// Install: Cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Cacheando arquivos para funcionamento offline...');
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn('[SW] Aviso ao cachear alguns arquivos:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate: Remove older caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Removendo cache antigo:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Stale-While-Revalidate with Cache Fallback
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached version immediately if available
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Network failed (offline)
        return cachedResponse;
      });

      return cachedResponse || fetchPromise;
    })
  );
});
