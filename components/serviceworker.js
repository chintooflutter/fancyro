const CACHE_NAME = 'fancyletters-cache-v1';

self.addEventListener('install', (event) => {
  // Skip the waiting phase and immediately activate the new service worker
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([      
        'https://fancyletters.org/components/main.js',
        'https://fancyletters.org/components/serviceworker.js',
        'https://fancyletters.org/style.css',
        'https://fancyletters.org/images/favicon.ico',
        'https://fancyletters.org/images/bubble-letter-a.webp',
        'https://fancyletters.org/images/bubble-letter-b.webp',
        'https://fancyletters.org/images/bubble-letter-c.webp',
        'https://fancyletters.org/images/bubble-letter-d.webp',
        'https://fancyletters.org/images/bubble-letter-e.webp',
        'https://fancyletters.org/images/bubble-letter-f.webp',
        'https://fancyletters.org/images/bubble-letter-g.webp',
        'https://fancyletters.org/images/bubble-letter-h.webp',
        'https://fancyletters.org/images/bubble-letter-i.webp',
        'https://fancyletters.org/images/bubble-letter-j.webp',
        'https://fancyletters.org/images/bubble-letter-k.webp',
        'https://fancyletters.org/images/bubble-letter-l.webp',
        'https://fancyletters.org/images/bubble-letter-m.webp',
        'https://fancyletters.org/images/bubble-letter-n.webp',
        'https://fancyletters.org/images/bubble-letter-o.webp',
        'https://fancyletters.org/images/bubble-letter-p.webp',
        'https://fancyletters.org/images/bubble-letter-q.webp',
        'https://fancyletters.org/images/bubble-letter-r.webp',
        'https://fancyletters.org/images/bubble-letter-s.webp',
        'https://fancyletters.org/images/bubble-letter-t.webp',
        'https://fancyletters.org/images/bubble-letter-u.webp',
        'https://fancyletters.org/images/bubble-letter-v.webp',
        'https://fancyletters.org/images/bubble-letter-w.webp',
        'https://fancyletters.org/images/bubble-letter-x.webp',
        'https://fancyletters.org/images/bubble-letter-y.webp',
        'https://fancyletters.org/images/bubble-letter-z.webp',
        'https://fancyletters.org/images/a-font.webp',
        'https://fancyletters.org/images/b-font.webp',
        'https://fancyletters.org/images/c-font.webp',
        'https://fancyletters.org/images/d-font.webp',
        'https://fancyletters.org/images/e-font.webp',
        'https://fancyletters.org/images/f-font.webp',
        'https://fancyletters.org/images/g-font.webp',
        'https://fancyletters.org/images/h-font.webp',
        'https://fancyletters.org/images/i-font.webp',
        'https://fancyletters.org/images/j-font.webp',
        'https://fancyletters.org/images/k-font.webp',
        'https://fancyletters.org/images/l-font.webp',
        'https://fancyletters.org/images/m-font.webp',
        'https://fancyletters.org/images/n-font.webp',
        'https://fancyletters.org/images/o-font.webp',
        'https://fancyletters.org/images/p-font.webp',
        'https://fancyletters.org/images/q-font.webp',
        'https://fancyletters.org/images/r-font.webp',
        'https://fancyletters.org/images/s-font.webp',
        'https://fancyletters.org/images/t-font.webp',
        'https://fancyletters.org/images/u-font.webp',
        'https://fancyletters.org/images/v-font.webp',
        'https://fancyletters.org/images/w-font.webp',
        'https://fancyletters.org/images/x-font.webp',
        'https://fancyletters.org/images/y-font.webp',
        'https://fancyletters.org/images/z-font.webp',
        'https://fancyletters.org/images/cursive-a.png',
        'https://fancyletters.org/images/cursive-b.png',
        'https://fancyletters.org/images/cursive-c.png',
        'https://fancyletters.org/images/cursive-d.png',
        'https://fancyletters.org/images/cursive-e.png',
        'https://fancyletters.org/images/cursive-f.png',
        'https://fancyletters.org/images/cursive-g.png',
        'https://fancyletters.org/images/cursive-h.png',
        'https://fancyletters.org/images/cursive-i.png',
        'https://fancyletters.org/images/cursive-j.png',
        'https://fancyletters.org/images/cursive-k.png',
        'https://fancyletters.org/images/cursive-l.png',
        'https://fancyletters.org/images/cursive-m.png',
        'https://fancyletters.org/images/cursive-n.png',
        'https://fancyletters.org/images/cursive-o.png',
        'https://fancyletters.org/images/cursive-p.png',
        'https://fancyletters.org/images/cursive-q.png',
        'https://fancyletters.org/images/cursive-r.png',
        'https://fancyletters.org/images/cursive-s.png',
        'https://fancyletters.org/images/cursive-t.png',
        'https://fancyletters.org/images/cursive-u.png',
        'https://fancyletters.org/images/cursive-v.png',
        'https://fancyletters.org/images/cursive-w.png',
        'https://fancyletters.org/images/cursive-x.png',
        'https://fancyletters.org/images/cursive-y.png',
        'https://fancyletters.org/images/cursive-z.png',
        // Add more files that don't change often
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // Bypass caching for AdSense requests
  if (requestUrl.hostname === 'pagead2.googlesyndication.com' || requestUrl.hostname.endsWith('doubleclick.net')) {
    return; // Bypass fetch event for AdSense requests
  }

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Serve from cache if found
      if (cachedResponse) {
        return cachedResponse;
      }

      // Fetch from network and cache the response
      return caches.open(CACHE_NAME).then(cache => {
        return fetch(event.request).then(response => {
          // Cache the fetched response if it's not AdSense related
          if (!requestUrl.hostname.endsWith('googlesyndication.com') && !requestUrl.hostname.endsWith('doubleclick.net')) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      });
    })
  );
});