const CACHE_NAME = 'fancyletters-cache-v1';

self.addEventListener('install', (event) => {
  // Skip the waiting phase and immediately activate the new service worker
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        'https://fancyletters.org/',
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
        'https://fancyletters.org/about.html',
        'https://fancyletters.org/contact.html',
        'https://fancyletters.org/privacy.html',
        'https://fancyletters.org/cute-fonts-copy-and-paste.html',
        'https://fancyletters.org/fancy-text-generator.html',
        'https://fancyletters.org/zalgo-font-generator.html',
        'https://fancyletters.org/cursive-font-generator.html',
        'https://fancyletters.org/fancy-font-generator.html',
        'https://fancyletters.org/symbols/christmas.html',
        'https://fancyletters.org/character-counter.html',
        'https://fancyletters.org/a-in-different-fonts.html',
        'https://fancyletters.org/b-in-different-fonts.html',
        'https://fancyletters.org/c-in-different-fonts.html',
        'https://fancyletters.org/d-in-different-fonts.html',
        'https://fancyletters.org/e-in-different-fonts.html',
        'https://fancyletters.org/f-in-different-fonts.html',
        'https://fancyletters.org/g-in-different-fonts.html',
        'https://fancyletters.org/h-in-different-fonts.html',
        'https://fancyletters.org/i-in-different-fonts.html',
        'https://fancyletters.org/j-in-different-fonts.html',
        'https://fancyletters.org/k-in-different-fonts.html',
        'https://fancyletters.org/l-in-different-fonts.html',
        'https://fancyletters.org/m-in-different-fonts.html',
        'https://fancyletters.org/n-in-different-fonts.html',
        'https://fancyletters.org/o-in-different-fonts.html',
        'https://fancyletters.org/p-in-different-fonts.html',
        'https://fancyletters.org/q-in-different-fonts.html',
        'https://fancyletters.org/r-in-different-fonts.html',
        'https://fancyletters.org/s-in-different-fonts.html',
        'https://fancyletters.org/t-in-different-fonts.html',
        'https://fancyletters.org/u-in-different-fonts.html',
        'https://fancyletters.org/v-in-different-fonts.html',
        'https://fancyletters.org/w-in-different-fonts.html',
        'https://fancyletters.org/x-in-different-fonts.html',
        'https://fancyletters.org/y-in-different-fonts.html',
        'https://fancyletters.org/z-in-different-fonts.html',
        'https://fancyletters.org/a-in-cursive.html',
        'https://fancyletters.org/b-in-cursive.html',
        'https://fancyletters.org/c-in-cursive.html',
        'https://fancyletters.org/d-in-cursive.html',
        'https://fancyletters.org/e-in-cursive.html',
        'https://fancyletters.org/f-in-cursive.html',
        'https://fancyletters.org/g-in-cursive.html',
        'https://fancyletters.org/h-in-cursive.html',
        'https://fancyletters.org/i-in-cursive.html',
        'https://fancyletters.org/j-in-cursive.html',
        'https://fancyletters.org/k-in-cursive.html',
        'https://fancyletters.org/l-in-cursive.html',
        'https://fancyletters.org/m-in-cursive.html',
        'https://fancyletters.org/n-in-cursive.html',
        'https://fancyletters.org/o-in-cursive.html',
        'https://fancyletters.org/p-in-cursive.html',
        'https://fancyletters.org/q-in-cursive.html',
        'https://fancyletters.org/r-in-cursive.html',
        'https://fancyletters.org/s-in-cursive.html',
        'https://fancyletters.org/t-in-cursive.html',
        'https://fancyletters.org/u-in-cursive.html',
        'https://fancyletters.org/v-in-cursive.html',
        'https://fancyletters.org/w-in-cursive.html',
        'https://fancyletters.org/x-in-cursive.html',
        'https://fancyletters.org/y-in-cursive.html',
        'https://fancyletters.org/z-in-cursive.html',
        'https://fancyletters.org/bubble-letter-a.html',
        'https://fancyletters.org/bubble-letter-b.html',
        'https://fancyletters.org/bubble-letter-c.html',
        'https://fancyletters.org/bubble-letter-d.html',
        'https://fancyletters.org/bubble-letter-e.html',
        'https://fancyletters.org/bubble-letter-f.html',
        'https://fancyletters.org/bubble-letter-g.html',
        'https://fancyletters.org/bubble-letter-h.html',
        'https://fancyletters.org/bubble-letter-i.html',
        'https://fancyletters.org/bubble-letter-j.html',
        'https://fancyletters.org/bubble-letter-k.html',
        'https://fancyletters.org/bubble-letter-l.html',
        'https://fancyletters.org/bubble-letter-m.html',
        'https://fancyletters.org/bubble-letter-n.html',
        'https://fancyletters.org/bubble-letter-o.html',
        'https://fancyletters.org/bubble-letter-p.html',
        'https://fancyletters.org/bubble-letter-q.html',
        'https://fancyletters.org/bubble-letter-r.html',
        'https://fancyletters.org/bubble-letter-s.html',
        'https://fancyletters.org/bubble-letter-t.html',
        'https://fancyletters.org/bubble-letter-u.html',
        'https://fancyletters.org/bubble-letter-v.html',
        'https://fancyletters.org/bubble-letter-w.html',
        'https://fancyletters.org/bubble-letter-x.html',
        'https://fancyletters.org/bubble-letter-y.html',
        'https://fancyletters.org/bubble-letter-z.html',

        // Add more files that don't change often
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.ok) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
          });
        }
        return networkResponse;
      }).catch(() => {
        // Fallback to cache if fetch fails
        return cachedResponse;
      });
      return cachedResponse || fetchPromise;
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