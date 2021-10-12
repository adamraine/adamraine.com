const CACHE = 'cache-v8';

const CACHE_URLS = [
  'index.html',
  './',
  'resume.pdf',
  'images/profile-small.webp',
  'images/profile.webp',
  'images/icon-144.webp',
  'images/icon-512.webp',
  'images/icon-512.png',
  'favicon.ico',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(CACHE_URLS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE) return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  const response = Promise.all([
    caches.match(event.request),
    fetch(event.request).catch(() => new Response(null, {status: 404})),
  ]).then(([cacheResponse, fetchResponse]) => {
    if (cacheResponse && !fetchResponse.ok) return cacheResponse;
    return fetchResponse;
  })
  event.respondWith(response);
});