const CACHE_NAME = 'soja-pulverizacao-v9-4-fungicidas';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './ficha_de_campo_impressao.html',
  './talhoes_dados.json',
  './manifest.json',
  './tailwind.min.js',
  './xlsx.full.min.js',
  './firebase-app.js',
  './firebase-database.js',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn('[SW] Aviso ao cachear alguns arquivos:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Network-First para HTML/JSON (sempre pega a versão mais recente se tiver internet, e cai pro cache se estiver offline)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const ehDocumentoOuJson = event.request.mode === 'navigate' ||
                            url.pathname.endsWith('.html') ||
                            url.pathname.endsWith('.json') ||
                            url.pathname.endsWith('/');

  if (ehDocumentoOuJson) {
    event.respondWith(
      fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return networkResponse;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return networkResponse;
      }).catch(() => cachedResponse);
      return cachedResponse || fetchPromise;
    })
  );
});
